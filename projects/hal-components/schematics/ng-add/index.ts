import { Rule, SchematicContext, Tree, SchematicsException } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { experimental } from '@angular-devkit/core';

import {
  getProjectStyleFile,
} from '@angular/cdk/schematics';

import { Schema as AddSchema } from './schema';

const stylesToAdd = '\n' +
  `@import "~@hafslundnett/hdd-style/main"; \n` +
  ` \n` +
  `@import "~@hafslundnett/hdd-style/variables/main"; \n` +
  `@import "~@angular/material/theming"; \n` +
  ` \n` +
  `html, \n` +
  `body { \n` +
  `  height: 100%; \n` +
  `} \n` +
  ` \n` +
  `body { \n` +
  `  overflow-y: scroll; \n` +
  `} \n` +
  ` \n` +
  `@include mat-core(); \n` +
  `$primary-color: mat-palette($hdd-material_primary); \n` +
  `$accent-color: mat-palette($hdd-material_accent); \n` +
  `$warn-color: mat-palette($hdd-material_warn); \n` +
  `$theme: mat-light-theme($primary-color, $accent-color, $warn-color); \n` +
  ` \n` +
  `$typography: mat-typography-config( \n` +
  `  $font-family: ( \n` +
  `    $font-family // Font-family from HDD-style \n` +
  `  ) \n` +
  `); \n` +
  ` \n` +
  `@include angular-material-theme($theme); \n` +
  `@include angular-material-typography($typography); \n`;

// Just return the tree
// Will just add to package of using project?
export function ngAdd(options: AddSchema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    console.log('Running HAL install------------------------------------------ =D');
    context.addTask(new NodePackageInstallTask());

    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }

    // convert workspace to string
    const workspaceContent = workspaceConfig.toString();

    // parse workspace string into JSON object
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceContent);
    const projectDefault = workspace.defaultProject;

    const projectName = projectDefault as string;
    const project = workspace.projects[projectName];

    addHdd(tree);

    if (options.addStyles) {
      updateStyles(tree, project);
    }

    return tree;
  };
}

function addHdd(tree: Tree) {
  const pkg = '@hafslundnett/hdd-style';
  const version = '^2.2.0';

  if (tree.exists('package.json')) {
    const read = tree.read('package.json');
    if (!read) {
      return;
    }
    const sourceText = read.toString('utf-8');
    const json = JSON.parse(sourceText);

    if (!json.dependencies) {
      json.dependencies = {};
    }

    if (!json.dependencies[pkg]) {
      json.dependencies[pkg] = version;
      json.dependencies = sortObjectByKeys(json.dependencies);
    }

    tree.overwrite('package.json', JSON.stringify(json, null, 2));
  }

}

/**
 * Sorts the keys of the given object.
 * @returns A new object instance with sorted keys
 */
function sortObjectByKeys(obj: object) {
  return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key]) && result, {});
}

// https://github.com/angular/components/blob/e02bb8252622ee3d6c382878910f68578b32ffe3/src/material/schematics/ng-add/setup-project.ts
function updateStyles(tree: Tree, project: any) {
  const styleFilePath = getProjectStyleFile(project, 'scss');
  console.log(styleFilePath);
  if (!styleFilePath) {
    console.log(`Could not find the default style file for this project.`);
    console.log(`Please consider manually setting up the Roboto font in your CSS.`);
    return;
  }
  const buffer = tree.read(styleFilePath);

  if (!buffer) {
    console.log(`Could not read the default style file within the project ` +
      `(${styleFilePath})`);
    console.log(`Please consider manually setting up the Robot font.`);
    return;
  }

  // const stylesToAddTest = '\n' +
  //     `html, body { height: 100%; }\n` +
  //     `body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }\n`;

  const htmlContent = buffer.toString();

  if (htmlContent.includes(stylesToAdd)) {
    console.log('inludes!');
    return;
  }

  const recorder = tree.beginUpdate(styleFilePath);

  recorder.insertLeft(htmlContent.length, stylesToAdd);
  tree.commitUpdate(recorder);
}

import {
  Rule, Tree, SchematicsException,
  apply, url, applyTemplates, move,
  chain, mergeWith
} from '@angular-devkit/schematics';

import { strings, normalize, experimental } from '@angular-devkit/core';

import { Schema as DocsPageSchema } from './schema';

enum Types {
  component = 'component',
  service = 'service',
  directive = 'directive',
  pipe = 'pipe',
  constant = 'constant'
}

export function docsPage(options: DocsPageSchema): Rule {
  return (tree: Tree) => {

    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }

    // convert workspace to string
    const workspaceContent = workspaceConfig.toString();

    // parse workspace string into JSON object
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceContent);
    if (!options.project) {
      options.project = workspace.defaultProject;
    }

    const projectName = options.project as string;
    const project = workspace.projects[projectName];
    const projectType = project.projectType === 'application' ? 'app' : 'lib';
    const apiTableHeaderName = getApiTableHeaderName(options.type);

    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }

    const newPath = options.path + '/' + strings.dasherize(options.name) + '-doc';

    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify, // <-- function
        dasherize: strings.dasherize, // <-- function
        name: options.name + '-doc', // <-- variable
        halCompName: options.name, // <-- variable
        apiTableHeaderName // <-- variable
      }),
      move(normalize(newPath))
    ]);

    return chain([
      mergeWith(templateSource)
    ]);
  };
}

function getApiTableHeaderName(type: string) {
  if (type === Types.component || type === Types.pipe) {
    return 'Input';
  }
  return 'Methods';
}

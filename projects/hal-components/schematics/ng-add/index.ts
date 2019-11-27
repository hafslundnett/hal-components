import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

// Just return the tree
// Will just add to package of using project?
export function ngAdd(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log('Im alive!------------------------------------------ =D');
    _context.addTask(new NodePackageInstallTask());
    return tree;
  };
}

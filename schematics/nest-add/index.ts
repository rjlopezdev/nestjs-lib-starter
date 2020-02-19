import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { NestAddOptions } from './schema';

export function nestAdd(_options: NestAddOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.warn(`Nest Starter Library installed successfully via cli  ✅`);
    _context.addTask(new NodePackageInstallTask());
    return tree;
  };
}

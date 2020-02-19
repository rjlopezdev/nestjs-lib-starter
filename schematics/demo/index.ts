import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { DemoOptions } from './schema';

export function demoSchematic(_options: DemoOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.warn(`${_options.catType} cat says: 😻Meow!`);
    return tree;
  };
}

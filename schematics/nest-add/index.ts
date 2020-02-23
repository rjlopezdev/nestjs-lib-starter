import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { NestAddOptions } from './schema';
import { ModuleDeclarator, ModuleFinder } from '@nestjs/schematics';
const path = require('path');

export function nestAdd(_options: NestAddOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    _context.addTask(new NodePackageInstallTask());
    console.warn(`Nest Library Starter installed successfully via cli  ✅`);

    _options.name = 'LibraryName'

    const moduleFinder: ModuleFinder = new ModuleFinder(tree);
    // @ts-ignore
    _options.module = moduleFinder.find({
      name: 'AppModule',
      path: path.join(process.env.PATH, 'src/app.module.ts')
    });

    if (!_options.module) {
      return tree;
    }

    // @ts-ignore
    const content = tree.read(_options.module).toString();
    const moduleDeclarator: ModuleDeclarator = new ModuleDeclarator();

    // @ts-ignore
    tree.overwrite(_options.module, moduleDeclarator.declare(content, _options));
    return tree;
  };
}

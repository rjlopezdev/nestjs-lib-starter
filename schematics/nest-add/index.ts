import {
  Rule,
  SchematicContext,
  Tree,
  branchAndMerge,
  chain,
  apply,
  url,
  move,
  noop,
  template,
  mergeWith
} from '@angular-devkit/schematics';
import { NestAddOptions } from './schema';
import { ModuleDeclarator, ModuleFinder, mergeSourceRoot } from '@nestjs/schematics';
import { Path, join } from '@angular-devkit/core';

export function nestAdd(options: NestAddOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    console.warn(`Nest Library Starter installed successfully via cli  ✅`);
    return branchAndMerge(
      chain([
        //@ts-ignore
        mergeSourceRoot(options),
        mergeWith(generate(options)),
        addDeclarationToModule(options),
      ]),
    )(tree, context);
  };
}

function addDeclarationToModule(options: NestAddOptions): Rule {
  return (tree: Tree) => {

    // Name of the module to add
    options.name = 'library-name';

    // [Search] Module to add to [imports|declarations|exports|providers] LibraryNameModule
    const moduleFinder: ModuleFinder = new ModuleFinder(tree);
    options.metadata = 'imports';
    options.staticOptions = {
      name: 'register',
      value: {
        value: '<DEFAULT>'
      }
    };
    options.module = moduleFinder.find({
      name: options.module || 'app',
      path: options.path as Path
    });

    if (!options.module) {
      return tree;
    }

    // [Write] Commit previous configurations to Tree
    const content = tree.read(options.module).toString();
    const moduleDeclarator: ModuleDeclarator = new ModuleDeclarator();

    tree.overwrite(options.module, moduleDeclarator.declare(content, options));
    return tree;
  }
}

/**
 * Template files rendering
 */
function generate(options: NestAddOptions) {
  return (context: SchematicContext) =>
    apply(url(join('./files' as Path, options.language)), [
      noop(),
      template({}),
      move(options.path),
    ])(context);
}

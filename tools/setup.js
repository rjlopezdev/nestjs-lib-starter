
/**
 * 🔥🔥🔥 : you can remove this file after setup :)
 * 💡Tip: if you setup wrongly, just discard git changes & re-run setup :)
 */

/**
 * Utility functions
 */
const camelize = (str => str
  .replace(/([A-Z])([A-Z])/g, '$1-$2')
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')            
  .toLowerCase()
);

const inquirer = require('inquirer');
const replace = require('replace-in-file');
const fs = require('fs');

const REPLACEMENT_OPTIONS = (from, to, dryRun) => ({
  files: [
    '*',
    'schematics/**/*',
    'src/**/*'
  ],
  from: new RegExp(from, 'g'),
  to: to,
  dry: dryRun
});

const REPLACEMENT_RULES = {
  LIBRARY_NAME: {
    defaultOrigin: 'Nest Library Starter',
    transformationRules: [
      {
        to: (target) => target,
      }
    ]
  },
  REPOSITORY_NAME: {
    defaultOrigin: 'nestjs-lib-starter',
    transformationRules: [
      {
        to: (target) => target,
      }
    ]
  },
  NPMJS_NAMESPACE: {
    defaultOrigin: 'nestjs-library-starter',
    transformationRules: [
      {
        to: (target) => target,
      }
    ]
  },
  MAINTAINER_EMAIL: {
    defaultOrigin: 'rjlopezdev@mail.com',
    transformationRules: [
      {
        to: (target) => target,
      }
    ]
  },
  MAINTAINER_NAME: {
    defaultOrigin: 'rjlopezdev',
    transformationRules: [
      {
        to: (target) => target,
      }
    ]
  },
  MODULE_NAME: {
    defaultOrigin: 'LibraryName',
    transformationRules: [
      {
        from: (target) => `${target}Module`,
        to: (target) => `${target}Module`,
      },
      {
        from: (target) => `${camelize(target)}.module`,
        to: (target) => `${camelize(target)}.module`,
        file: {
          from: 'src/module/library-name.module.ts',
          to: (target) => `src/module/${camelize(target)}.module.ts`,
        }
      },
      {
        from: (target) => `${target}Config`,
        to: (target) => `${target}Config`,
      }
    ]
  },
  SERVICE_NAME: {
    defaultOrigin: 'LibraryName',
    transformationRules: [
      {
        from: (target) => `${target}Service`,
        to: (target) => `${target}Service`,
      },
      {
        from: (target) => 'librarynameservice',
        to: (target) => `${target.toLowerCase()}service`
      },
      {
        from: (target) => `${camelize(target)}.service`,
        to: (target) => `${camelize(target)}.service`,
        file: {
          from: 'src/module/library-name.service.ts',
          to: (target) => `src/module/${camelize(target)}.service.ts`,
        }
      }
    ]
  },
  NPM_VERSION: {
    defaultOrigin: /"version": "1.*.*"/g,
    transformationRules: [
      {
        to: (target) => `"version": "1.0.0"`
      }
    ]
  }
};

const FILES_TO_REMOVE = [
  'CHANGELOG.md',
  'package-lock.json'
]

const questions = [
  {
    type: 'input',
    name: 'LIBRARY_NAME',
    default: 'Cat Library',
    message: "Library Name (brand name of the library ex. <NestJS Awesome Library>):"
  },
  {
    type: 'input',
    name: 'MAINTAINER_NAME',
    default: 'awesome-cat-developer',
    message: 'Maintainer (github account name):'
  },
  {
    type: 'input',
    name: 'MAINTAINER_EMAIL',
    default: (answers) => `${answers.MAINTAINER_NAME}@gmail.com`,
    message: 'Maintainer email:'
  },
  {
    type: 'input',
    name: 'REPOSITORY_NAME',
    default: 'cat-repository',
    message: 'Repository (relative to user account):'
  },
  {
    type: 'input',
    name: 'NPMJS_NAMESPACE',
    default: (answers) => `${answers.REPOSITORY_NAME}`,
    message: 'Npmjs namespace to publish:'
  },
  {
    type: 'input',
    name: 'MODULE_NAME',
    default: 'AwesomeCat',
    message: 'Name of the module (PascalCase):'
  },
  {
    type: 'input',
    name: 'SERVICE_NAME',
    default: (answers) => `${answers.MODULE_NAME}`,
    message: 'Name of the service (PascalCase):'
  }
];

async function setup() {

  const answers = await inquirer.prompt(questions);

  console.log('\n🎛  Setting your project...');

  console.log(`\n🔡👷 Applying transformation rules...\n`);

  const dryRun = process.argv.includes('--dryRun');

  for (const replacementRule in REPLACEMENT_RULES) {
    for (const transformationRule of REPLACEMENT_RULES[replacementRule].transformationRules) {

      const cliInput = answers[replacementRule];
      const from = transformationRule.from
        ? transformationRule.from(REPLACEMENT_RULES[replacementRule].defaultOrigin)
        : REPLACEMENT_RULES[replacementRule].defaultOrigin;
      const to = transformationRule.to(cliInput);

      replaceStrings(from, to, cliInput, dryRun);
      renameFile(transformationRule, cliInput, dryRun);
    }
  }

  removeFiles(dryRun);

  console.log('Done! ✅  Be a good cat! 😼');
}

function replaceStrings(from, to, cliInput, dryRun) {
  replace.sync(REPLACEMENT_OPTIONS(from, to, dryRun));
  console.log(`🔡  ${from} => ${to} ✅`);
  renameFile(transformationRule, cliInput, dryRun);
}

function renameFile(transformationRule, cliInput, dryRun) {
  if (transformationRule.file) {
    const fromFile = transformationRule.file.from;
    const toFile = transformationRule.file.to(cliInput);
    if (dryRun) {
      console.log(`\n📃  Renaming file ${fromFile} => ${toFile}\n`);
      continue;
    }
    console.log(`\n📃  Renaming file ${fromFile} => ${toFile}\n`);
    fs.renameSync(fromFile, toFile);
  }
}

function removeFiles(dryRun) {
  console.log(`\n🗑👷  Removing unnecessary files...\n`);
  for (const file of FILES_TO_REMOVE) {
    if (dryRun) {
      console.log(`\n🗑  Removed ${file}`);
      continue;
    }
    fs.unlinkSync(file);
    console.log(`\n🗑  Removed ${file}`);
  }
}

setup();

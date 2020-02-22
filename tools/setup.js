/**
 * 🔥🔥🔥 : you can remove this file after setup :)
 * 💡Tip: if you setup wrongly, just discard git commit & re-run setup :)
 */

const inquirer = require('inquirer');
const replace = require('replace-in-file');

const replacementRules = {
  LIBRARY_NAME: 'Nest Library Starter' ,
  REPOSITORY_NAME: 'nestjs-library-starter' ,
  NPMJS_NAMESPACE: 'nestjs-library-starter' ,
  MAINTAINER_EMAIL: 'rjlopezdev@mail.com' ,
  MAINTAINER_NAME: 'rjlopezdev' ,
  MODULE_NAME: 'LibraryNameModule' ,
  SERVICE_NAME: 'LibraryNameService',
};

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
    default: 'awesome-cat',
    message: 'Maintainer (github account name):'
  },
  {
    type: 'input',
    name: 'MAINTAINER_EMAIL',
    default: (answers) => `${answers['MAINTAINER_NAME']}@gmail.com`,
    message: 'Npmjs namespace to publish:'
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
    default: (answers) => `${answers['REPOSITORY_NAME']}`,
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
    default: (answers) => `${answers['MODULE_NAME']}`,
    message: 'Name of the service (PascalCase):'
  }
];

const options = (from, to, dryRun) => ({
  files: '/*',
  from: new RegExp(from, 'g'),
  to: to,
  dry: dryRun
});

inquirer
.prompt(questions)
.then(answers => {

  console.log('🎛  Setting your project...'); 

  console.log(process.argv.includes('--dryRun') ? true : false);

  for (const replaceRule in replacementRules) {
    console.log(`${replacementRules[replaceRule]} => ${answers[replaceRule]}`);
    replace.sync(
      options(
        replacementRules[replaceRule],
        answers[replaceRule],
        process.argv.includes('--dryRun') ? true : false
      )
    );
  }

  console.log('Done! ✅ Happy codding! 😎');
});

/**
 * Removals after setup:
 * 1. commander
 * 2. remove setup script `scripts > setup`
 */

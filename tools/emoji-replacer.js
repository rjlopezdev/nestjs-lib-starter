const replace = require('replace-in-file');
const emoji = require('node-emoji');

let latestFile = 'docs/dist';

const options = {
  files: 'docs/dist/*',
  from: /:[a-z0-9]+:/g,
  to: (...args) => {
    if (!(args[3] == latestFile)) {
      console.log(`\n🔃 🔎 Replacements found over ${args[3]}\n`);
    }
    latestFile = args[3];
    const emojiReplacement = emoji.get(args[0]);
    console.log(`${args[0]} => ${emojiReplacement}`);
    return emojiReplacement;
  }
};

try {
  replace.sync(options);
} catch (error) {
  console.error('Error occurred:', error);
}

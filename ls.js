// `files` will be an array of filenames, like ['bash.js', 'pwd.js']
const fs = require('fs');
// fn doesn't exist until bash.js calls readDir locally
const readDir = (fn) => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      fn('Something went wrong!');
    } else {
      fn(files.join(' '));
    }
  })
}

module.exports = readDir;

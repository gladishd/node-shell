// `files` will be an array of filenames, like ['bash.js', 'pwd.js']
const fs = require('fs');
// const done = require('./bash.js');
const readDir = () => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done ('Something went wrong!')
    } else {
      done (files.join('\n'))
    }
  })
}

//module.exports = readDir;
// module.exports = (done) => {
//   fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//       done ('Something went wrong!')
//     } else {
//       done (files.join('\n'))
//     }
//   })
// }


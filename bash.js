// Output a prompt
process.stdout.write('prompt > ');

// we can access the pwd function and store it in a variable like so
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const fs = require('fs');
const curl = require('./curl')

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  let cmd = data.toString().trim(); // remove the newLine
  // if a user enters 'pwd' as an argument, we can then call it

  /* cmd[0] is the function (ls, pwd, cat, etc.)
   * cmd[1] is an argument
   * For example,
   * if the user types 'cat bash.js',
   * cmd[0] === 'cat' and cmd[1] === 'bash.js'
   */
  cmd = cmd.split(' ');

  if (cmd[0] === 'cat') { 
    for (let i = 1; i < cmd.length; i++) {
      cat(cmd[i])
    }
 }
  else if (cmd[0] === 'pwd') { pwd() }
  else if (cmd[0] === 'ls') { ls() }
  else if (cmd[0] === 'curl') {curl(cmd[1])}
  else {
    process.stdout.write('You typed: ' + cmd.join(' '));
    process.stdout.write('\nprompt > ');
  }
});

// const done = (output) => {
//   process.stdout.write(output);
//   process.stdout.write('\nprompt > ');
// }

// module.exports = done;


// module.exports = (done) => {
//   fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//       done ('Something went wrong!')
//     } else {
//       done (files.join('\n'))
//     }
//   })
// }
// Output a prompt
process.stdout.write('prompt > ');

// we can access the pwd function and store it in a variable like so
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const fs = require('fs');

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

  if (cmd[0] === 'cat') { cat(cmd[1]) }
  else if (cmd[0] === 'pwd') { pwd() }
  else if (cmd[0] === 'ls') { ls() }
  else {
    process.stdout.write('You typed: ' + cmd.join(' '));
    process.stdout.write('\nprompt > ');
  }
});



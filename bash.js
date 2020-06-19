// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newLine

  if (cmd === 'pwd') {
    process.stdout.write(`${process.cwd()}`);
    process.stdout.write('\nprompt > '); // return to prompt
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});



const fs = require('fs');
const printFile = (fileName) => {
  if (fileName === undefined) {
    process.stdout.write("Usage: cat filename");
    process.stdout.write("\nprompt > ");
    return;
  }
  return fs.readFile(fileName, 'utf8', (err, fileContent) => {
    if (err) {
      if (err.code === "ENOENT") {
        process.stdout.write('The file does not exist in the current working directory');
        process.stdout.write("\nprompt > ");
      } else { throw err }
    } else {
      process.stdout.write(fileContent)
      process.stdout.write("\nprompt > ");
    }
  })




}
module.exports = printFile;

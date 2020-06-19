const fs = require('fs');
const printFile = (fileNames) => {
  if (fileNames.length === 1) { // if there aren't any args
    process.stdout.write("Usage: cat filename");
    process.stdout.write("\nprompt > ");
    return;
  }
  fileNames.splice(1).forEach(name => {
    return fs.readFile(name, 'utf8', (err, fileContent) => {
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
  })
}
module.exports = printFile;

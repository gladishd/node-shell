const fs = require('fs');
const printFile = (fileNames, fn) => {
  if (fileNames.length === 1) { // if there aren't any args
    fn("Usage: cat filename");
    return;
  }
  fileNames.splice(1).forEach(name => {
    return fs.readFile(name, 'utf8', (err, fileContent) => {
      if (err) {
        if (err.code === "ENOENT") {
          fn('The file does not exist in the current working directory');
        } else { throw err }
      } else {
        fn(fileContent);
      }
    })
  })
}
module.exports = printFile;

const fs = require('fs');

module.exports = function(fileName) {
  path of file name

  fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

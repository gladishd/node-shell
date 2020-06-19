const request = require('request')

module.exports = (url, fn) => {
  request(url, function (error, response, body) {
    if (error) { fn(error); }
    fn(body);
  })
}

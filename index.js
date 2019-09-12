var osprey = require('osprey')
var express = require('express')
var join = require('path').join
var app = express()

var path = join(__dirname, 'assets', 'api.raml')

// Be careful, this uses all middleware functions by default. You might just
// want to use each one separately instead - `osprey.server`, etc.
osprey.loadFile(path)
  .then(function (middleware) {
    app.use('/v1',middleware)

    app.use(function (err, req, res, next) {
      // Handle errors.
    })

    app.listen(3000)
  })
   .catch(function(e) { console.error("Error: %s", e.message); });
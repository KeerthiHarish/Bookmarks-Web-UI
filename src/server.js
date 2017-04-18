const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, './index.html')
    const bundlePath = path.join(__dirname, './bundle.js')
    const publicPath = express.static(path.join(__dirname, './'))

    app.use('./', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })
    app.get('/bundle.js', function (_, res) { res.sendFile(bundlePath) })

    return app
  }
}

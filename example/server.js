const express = require('express')
const next = require('next')
const fs = require('fs')
const glob = require("glob")
const globby = require("globby")
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

globby(["components/**/*.scss", "styles/**/*.scss"]).then(rs => {
  fs.writeFile('styles/dist.scss', '')
  rs.forEach((path) => {
    if(path === 'styles/dist.scss') return false
    let paths = path.split('.')
    let exts = paths[paths.length - 1]
    if(exts === 'scss') {
      fs.appendFile("styles/dist.scss", `@import '${paths[0]}';\n`, (err) => {
        if(err) return console.log(err)
      })
    }
  })
  console.log("> Import css succeeded! ")
})

app.prepare()
.then(() => {
  const server = express()

  server.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

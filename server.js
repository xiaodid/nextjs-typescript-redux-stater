// require('@zeit/next-preact/alias')()
const express = require('express')
const next = require('next')
const compression = require('compression')
const moment = require('moment')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(compression())

  server.post('/getservertime', (req, res) => {
    res.json({
      serverTime: moment().format('YYYY-MM-DD hh:mm:ss')
    })
  })

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3003, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3003')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

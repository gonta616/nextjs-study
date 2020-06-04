const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const next = require('next')
const mongoose = require('mongoose')
const demoRouter = require('./api/routes/demo')
const entryRouter = require('./api/routes/entry')
const userRouter = require('./api/routes/user')
const tagRouter = require('./api/routes/tag')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())
  server.use(session({
    secret: 'zZAai8301bSnuA8sabUwabxe3',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }))

  // MongoDB
  // mongoose.Promise = Promise
  mongoose.connect('mongodb://localhost:27017/nextjstest', { useNewUrlParser: true, useCreateIndex: true })
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))

  server.use('/api/demo', demoRouter)
  server.use('/api/entry', entryRouter)
  server.use('/api/user', userRouter)
  server.use('/api/tag', tagRouter)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

require('dotenv').config()
const express = require('express')
const winston = require('winston')
const bodyParser = require('body-parser')

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../../app/App.jsx'

const app = express()

winston.level = process.env.LOG_LEVEL

app.use('/static', express.static('dist/server/static'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).send(renderApp(req, res))
})

app.get("/catalog", (req, res) => {
  res.status(200).send(renderApp(req, res))
})

function renderApp(req, res) {
  const context = {};

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
  return renderPage(html)
}

function renderPage(appHtml) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React PWA</title>
      </head>
      <body>
        <div id="app">${appHtml}</div>
        <script src="static/app.js"></script>
      </body>
    </html>
   `
}

app.listen(process.env.PORT, () => winston.log('info', `Server started on ${process.env.PORT}`))
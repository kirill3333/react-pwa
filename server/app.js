require('dotenv').config()
const express = require('express')
const winston = require('winston')
const bodyParser = require('body-parser')

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../../app/App.jsx'
import { renderTemplate } from './template'

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
  return renderTemplate(html)
}

app.listen(process.env.PORT, () => winston.log('info', `Server started on ${process.env.PORT}`))
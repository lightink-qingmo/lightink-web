const cacheableResponse = require('cacheable-response')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3333
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

// Server Cache
const ssrCache = cacheableResponse({
  ttl: 10 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
})

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }))
 
  server.get('/blog/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    const pagePath = '/blog'
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

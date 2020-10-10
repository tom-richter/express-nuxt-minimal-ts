import express from 'express';

// Create express instance
const app = express()

// API Routes
app.use('/hello', (_req, res) => {
  res.end('Hello Nuxt-Express!')
})

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}

import express from 'express';

// Create express instance
const app = express()

app.use('/posts', (_req, res) => {
  res.send([
    {
      id: '1',
      title: 'My Post 1',
    },
    {
      id: '2',
      title: 'My Post 2',
    },
    {
      id: '3',
      title: 'My Post 3',
    },
  ])
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

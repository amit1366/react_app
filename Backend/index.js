const connecttomongo = require('./DB');
connecttomongo();
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
// avvilable routes
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/auth', require('./Routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello World! this is new ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
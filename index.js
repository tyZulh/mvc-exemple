require('dotenv').config()
const express = require('express')
const { router } = require('./routes')

const PORT = process.env.PORT

const app = express()

app.use(express.json())

router(app)

app.listen(PORT, () => {
  console.log(`Server up & runnig on : ${PORT}`);
})
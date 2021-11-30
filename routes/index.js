const userRouter = require('./userRouter')

const router = (app) => {
  app.use('/users', userRouter)
}

module.exports ={ router }
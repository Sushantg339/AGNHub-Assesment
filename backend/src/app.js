import express from 'express'

import serviceRouter from './routes/services.routes'


const app = express()

app.use(express.json())

app.use('/api/services', serviceRouter)

export default app
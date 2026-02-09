import express from 'express'

import serviceRouter from './routes/services.routes.js'
import contactRouter from './routes/contact.routes.js'

const app = express()

app.use(express.json())

app.use('/api/services', serviceRouter)
app.use('/api/contact', contactRouter)

export default app
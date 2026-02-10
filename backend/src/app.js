import express from 'express'
import cors from 'cors'
import path from 'path'
import serviceRouter from './routes/services.routes.js'
import contactRouter from './routes/contact.routes.js'

const app = express()
const __dirname = path.resolve()


app.use(express.json())

app.use('/api/services', serviceRouter)
app.use('/api/contact', contactRouter)

if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname , "../frontend/dist")))

    app.get('/*splat' , (req , res)=>{
        res.sendFile(path.join(__dirname , "../frontend/dist/index.html"))
    })
}

export default app
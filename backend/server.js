import 'dotenv/config'
import app from './src/app'
import { connectToDB } from './src/config/db'

const PORT = process.env.PORT || 3000

connectToDB()

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})
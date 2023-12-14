import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import {todoRouter} from './todo/todoRouter.js'

dotenv.config()

const PORT = process.env.PORT
const DB_URL = process.env.MONGODB_URL

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to my todo backend side 😎😎😎"
    })
})

app.use('/todo', todoRouter)

app.listen(PORT, async() => {
    await connectDB(DB_URL)
    console.log(`Server is running on port ${PORT}...`)
})
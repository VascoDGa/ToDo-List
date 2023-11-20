import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import Routes from './routes/index.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()

app.use(cors())

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))

app.use('/api/v1', Routes)

(async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL, {usenewUrlParser : true})

        mongoose.connection.on('connected', () => {
            console.log("Databse connected successfully")
        })

        mongoose.connection.on('disconnected', () => {
            console.log("Database disconnected successfully")
        })
    }
    catch(err) {
        console.log(err)
    }
})()

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
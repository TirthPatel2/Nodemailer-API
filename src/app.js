import dotenv from 'dotenv';
dotenv.config();

import bodyparser from 'body-parser'
import cors from 'cors'
import express from 'express'

import v1Router from './v1/routes.js'

const app = express()

app.use(
    cors({
        origin: '*', // we can update this when we will deploye frontend
        methods: ['POST'],
        credentials: true,
        allowedHeaders: ['Content-Type'],
    })
)

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/v1', v1Router)

export default app
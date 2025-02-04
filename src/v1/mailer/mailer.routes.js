import express from 'express'

import { newMailer } from './mailer.controller.js'

const mailerRoutes = express.Router()

mailerRoutes.post('/', newMailer)

export default mailerRoutes

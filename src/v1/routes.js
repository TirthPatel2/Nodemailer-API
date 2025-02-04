import express from 'express'

import mailer from './mailer/mailer.routes.js'

const v1Router = express.Router()

v1Router.use('/mailer', mailer)

export default v1Router
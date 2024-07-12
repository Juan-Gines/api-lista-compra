import express from 'express'
import cors from 'cors'
import corsOptions from './cors.js'

const expressApp = express()

expressApp.disable('x-powered-by')

// Middlewares
expressApp.use(express.json())
expressApp.use(cors(corsOptions))

// Routes

export default expressApp

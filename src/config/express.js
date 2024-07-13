import express from 'express'
import cors from 'cors'
import corsOptions from './cors.js'
import productRoutes from '../routes/productRoutes.js'

const expressApp = express()

expressApp.disable('x-powered-by')

// Middlewares
expressApp.use(express.json(corsOptions))
expressApp.use(cors())

// Routes
expressApp.use('/api', productRoutes)

export default expressApp

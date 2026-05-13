import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { postRoutes } from './routes/posts.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
postRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello world')
})

export { app }

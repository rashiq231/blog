import dotenv from 'dotenv'
import { app } from './app.js'
import { initDatabase } from './db/init.js'

dotenv.config()

try {
  await initDatabase()
  const port = process.env.PORT
  app.listen(port)
  console.log(`experss running on http://localhost:${port}`)
} catch (error) {
  console.log(`error connecting to database:`, error)
}

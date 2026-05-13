import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function gloablSetup() {
  const instance = await MongoMemoryServer.create({
    binary: {
      version: '8.3.1',
    },
  })
  global.__MONGOINSTANCE = instance
  process.env.DATABASE_URL = instance.getUri()
}

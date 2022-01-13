import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export function createMongoDbClient () {
  return (
    mongoose
      .connect(process.env.MONGO_DB_CONNECTION_STRING)
      .then(connection => {
        // TODO: Add logger
        console.log('MongoDB connected..')
        return connection
      })
      // TODO: Add logger
      .catch(error => console.error(error))
  )
}

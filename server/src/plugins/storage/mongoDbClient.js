import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export function createMongoDbClient () {
  return (
    mongoose
      .connect(process.env.MONGO_DB_CONNECTION_STRING)
      .then(connection => {
        return connection
      })
      // TODO: Add logger
      .catch(error => console.error(error))
  )
}

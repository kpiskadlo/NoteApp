import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export function createMongoDbClient (fastify) {
  return mongoose
    .connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(connection => {
      fastify.log.info('MongoDB connected..')
      return connection
    })
    .catch(error => {
      fastify.log.error(error)
    })
}

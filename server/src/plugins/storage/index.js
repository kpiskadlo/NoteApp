import fp from 'fastify-plugin'
import { createMongoDbClient } from './mongoDbClient'

const storagePlugin = async (fastify, options) => {
  await createMongoDbClient()
}

export default fp(storagePlugin)

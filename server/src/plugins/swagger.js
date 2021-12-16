import fp from 'fastify-plugin'
import fastifySwagger from 'fastify-swagger'

async function swaggerPlugin (fastify, options) {
  return fastify.register(fastifySwagger, {
    routePrefix: '/api',
    exposeRoute: true,
    openapi: {
      info: {
        title: 'Note App API',
        version: '1.0'
      }
    }
  })
}

export default fp(swaggerPlugin)

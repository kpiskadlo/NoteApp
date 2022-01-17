import fp from 'fastify-plugin'
import createNoteBody from '../../docs/schemas/createNoteBody.json'
import errorResponse from '../../docs/schemas/errorResponse.json'

const schemasPlugin = (fastify, options, next) => {
  fastify.addSchema(createNoteBody)
  fastify.addSchema(errorResponse)

  fastify.setSchemaErrorFormatter(function (errors, dataVar) {
    let errorMessage = 'Validation error'

    if (dataVar === 'body') {
      errorMessage = `${errors[0].dataPath} ${errors[0].message}`
    }
    return new Error(errorMessage)
  })

  next()
}

export default fp(schemasPlugin)

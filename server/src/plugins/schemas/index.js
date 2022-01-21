import fp from 'fastify-plugin'
import createNoteBody from '../../docs/schemas/createNoteBody.json'
import errorResponse from '../../docs/schemas/errorResponse.json'
import note from '../../docs/schemas/note.json'
import notes from '../../docs/schemas/notes.json'

const schemasPlugin = (fastify, options, next) => {
  fastify.addSchema(createNoteBody)
  fastify.addSchema(errorResponse)
  fastify.addSchema(note)
  fastify.addSchema(notes)

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

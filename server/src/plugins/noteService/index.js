import fp from 'fastify-plugin'
import { NoteService } from './noteService'

const noteServicePlugin = async (fastify, options) => {
  fastify.decorateRequest('noteService', null)
  fastify.addHook('onRequest', async (request, reply) => {
    request.noteService = new NoteService()
  })
}

export default fp(noteServicePlugin)

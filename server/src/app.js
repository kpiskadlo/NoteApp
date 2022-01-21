import { fastify } from 'fastify'
import cors from 'fastify-cors'
import schemas from './plugins/schemas'
import storage from './plugins/storage'
import noteService from './plugins/noteService'
import swagger from './plugins/swagger'
import { note } from './routes/note'

export function create (options) {
  return fastify(options)
    .register(cors, '*')
    .register(schemas)
    .register(swagger)
    .register(storage)
    .register(async instance => instance.register(noteService).register(note), {
      prefix: 'note'
    })
}

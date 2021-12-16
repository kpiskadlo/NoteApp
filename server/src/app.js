import { fastify } from 'fastify'
import cors from 'fastify-cors'
import swagger from './plugins/swagger'
import { note } from './routes/note'

export function create (options) {
  return fastify(options)
    .register(cors, '*')
    .register(swagger)
    .register(note, { prefix: 'note' })
}

import { fastify } from 'fastify';
import { note } from './routes/note';

export function create(options) {
  return fastify(options)
    .register(note, { prefix: 'note' });
}

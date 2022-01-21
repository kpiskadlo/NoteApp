import * as createNote from './create'
import * as findAllNotes from './findAll'
import * as updateNote from './update'
import * as deleteNote from './delete'

export const note = (instance, options, next) => {
  instance.post('/', createNote.options, createNote.handler)
  instance.get('/', findAllNotes.options, findAllNotes.handler)
  instance.patch('/:id', updateNote.options, updateNote.handler)
  instance.delete('/:id', deleteNote.options, deleteNote.handler)
  next()
}

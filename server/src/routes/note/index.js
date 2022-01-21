import * as create from './create'
import * as findAll from './findAll'
import * as update from './update'

export const note = (instance, options, next) => {
  instance.post('/', create.options, create.handler)
  instance.get('/', findAll.options, findAll.handler)
  instance.patch('/:id', update.options, update.handler)
  next()
}

import * as create from './create'

export const note = (instance, options, next) => {
  instance.post('/', create.options, create.handler)
  next()
}

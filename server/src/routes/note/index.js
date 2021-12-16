import * as helloWorld from './helloWorld'

export const note = (instance, options, next) => {
  instance.get('/', helloWorld.handler)

  next()
}

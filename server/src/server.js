import { create } from './app'

const port = process.env.PORT ?? '3000'

create({
  logger: {
    prettyPrint: true
  }
})
  .listen(port, '0.0.0.0')
  .catch(onError)

function onError (error) {
  console.error(error)
  process.exit(1)
}

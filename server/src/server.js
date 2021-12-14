import dotenv from 'dotenv';
import { create } from './app';

dotenv.config();

const port = process.env.PORT ?? '3000';

console.log(`\nListening on http://localhost:${port}\n`);

create({
  logger: true
})
  .listen(port, '0.0.0.0')
  .catch(onError);

function onError (error) {
  console.error(error);
  process.exit(1);
}

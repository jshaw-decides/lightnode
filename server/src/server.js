import Fastify from 'fastify';
import { WarpFactory } from 'warp-contracts';

import contract from './routes/contract.js';

const warp = WarpFactory.forMainnet();

const app = Fastify({
  logger: true,
});

app.get('/', () => ({ lightnode: 'v0.0.1' }));
app.get('/health', () => ({ health: 'ok' }));

app.get('/contract', async (request, reply) => {
  console.log('REQUEST============', request);
  return contract(warp)(request, reply);
});

const run = async () => {
  try {
    await app.listen({ port: 3333, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

run();

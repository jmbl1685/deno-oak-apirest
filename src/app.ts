import { Application } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

import { ENV_VARIABLES } from './config/env.ts';

import { routes } from './routes/index.ts';

const port = Number(Deno.env.get('PORT')) || ENV_VARIABLES.PORT;

const app = new Application();

app.use(oakCors());
routes(app);

console.log(`Server running in the port ${port}`);

await app.listen({ port });
import { Application } from 'https://deno.land/x/oak/mod.ts';

import { playerRoutes } from './players/index.ts';

export function routes(app: Application) {
  playerRoutes(app);
}
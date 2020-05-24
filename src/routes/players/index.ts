import { Application } from 'https://deno.land/x/oak/mod.ts';

/* ==============================
	Player Routes
================================= */

import createPlayer from './create/createPlayer.ts';

import getPlayer from './retrieve/getPlayer.ts';
import getPlayerById from './retrieve/getPlayerById.ts';

import updatePlayer from './update/updatePlayer.ts';

import deletePlayer from './delete/deletePlayer.ts';

export function playerRoutes(app: Application) {
  app.use(createPlayer.routes());
  app.use(createPlayer.allowedMethods());

  app.use(getPlayer.routes());
  app.use(getPlayer.allowedMethods());

  app.use(getPlayerById.routes());
  app.use(getPlayerById.allowedMethods());

  app.use(updatePlayer.routes());
  app.use(updatePlayer.allowedMethods());

  app.use(deletePlayer.routes());
  app.use(deletePlayer.allowedMethods());
}
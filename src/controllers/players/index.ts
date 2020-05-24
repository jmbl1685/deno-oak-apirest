import { createPlayer } from './create/createPlayer.ts';

import { getPlayers } from './retrieve/getPlayers.ts';
import { getPlayerById } from './retrieve/getPlayerById.ts';

import { deletePlayer } from './delete/deletePlayer.ts';

import { updatePlayer } from './update/updatePlayer.ts';

export const playerCtrl = {
  createPlayer,
  getPlayers,
  getPlayerById,
  deletePlayer,
  updatePlayer
}
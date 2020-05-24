import { Router } from 'https://deno.land/x/oak/mod.ts';

import { controllers } from '../../../controllers/index.ts'

const router = new Router();

router.delete('/v1/players/:playerId', controllers.playerCtrl.deletePlayer);

export default router;
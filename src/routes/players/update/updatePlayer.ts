import { Router } from 'https://deno.land/x/oak/mod.ts';

import { controllers } from '../../../controllers/index.ts'

const router = new Router();

router.put('/v1/players/:playerId', controllers.playerCtrl.updatePlayer);

export default router;
import { Router } from 'https://deno.land/x/oak/mod.ts';

import { controllers } from '../../../controllers/index.ts'

const router = new Router();

router.post('/v1/players', controllers.playerCtrl.createPlayer);

export default router;
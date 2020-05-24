import { Request, Response } from 'https://deno.land/x/oak/mod.ts';
import { requestDataHelper } from '../../../helpers/helpers.ts';

import * as players from '../../../lib/players/players.ts';

export async function createPlayer({
  request,
  response,
  params
}: {
  request: Request,
  response: Response,
  params: any
}) {

  const requestData = await requestDataHelper(request, params);

  await players.createPlayer(requestData);

  response.body = {
    status: 'success',
    message: 'player created',
  };
};


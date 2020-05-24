import { Request, Response } from 'https://deno.land/x/oak/mod.ts';
import { requestDataHelper } from '../../../helpers/helpers.ts';

import * as players from '../../../lib/players/players.ts';

export async function getPlayerById({
  request,
  response,
  params
}: {
  request: Request,
  response: Response,
  params: any
}) {

  const requestData = await requestDataHelper(request, params);

  const playerId = requestData?.playerId || '';

  const data = await players.getPlayerById(playerId) || null;

  response.body = {
    success: true,
    data,
  };
};


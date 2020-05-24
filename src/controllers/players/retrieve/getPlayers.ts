import { Request, Response } from 'https://deno.land/x/oak/mod.ts';
import { requestDataHelper } from '../../../helpers/helpers.ts';

import * as players from '../../../lib/players/players.ts';

export async function getPlayers({
  request,
  response,
  params
}: {
  request: Request,
  response: Response,
  params: any
}) {

  const requestData = await requestDataHelper(request, params);

  const data = await players.getPlayers() || [];

  response.body = {
    success: true,
    data,
  };
};


import { Request } from 'https://deno.land/x/oak/mod.ts';

export async function requestDataHelper(request: Request, params: any): Promise<any> {
  const paramsValue: any = {};
  const queryParams: URLSearchParams = request?.url?.searchParams;

  Array.from(queryParams?.keys()).forEach(key => {
    paramsValue[key] = queryParams.get(key);
  });

  const requestData = {
    ...(await request.body()).value,
    ...params,
    ...paramsValue
  }

  return requestData;
}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { checkAccountId } from '../../utils/api'


type Data = {
  code: number;
  resp: boolean;

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(checkAccountId('johndoe.near'))
  let resp = checkAccountId('johndoe.near');
  res.status(200).json({ code: 123456, resp: resp })
}

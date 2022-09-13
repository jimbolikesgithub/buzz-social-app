// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BuzzBody } from '../../typings'

type Data = {
  name: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: BuzzBody = JSON.parse(req.body);

  const mutations = ``

  res.status(200).json({ name: 'John Doe' })
}

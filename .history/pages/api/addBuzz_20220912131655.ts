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

  // Send instructions to backend, which is repsonsible for mutating the backend in the way requested
  const mutations = {
    mutations: [
      {
        create: {
          _type: 'buzz',
          text: data.text,
          username: data.username,
          blockBuzz: false,
          profileImg: data.profileImg,
          image: data.image,
        }
      }
    ]
  }

  res.status(200).json({ name: 'John Doe' })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BuzzBody } from '../../typings'

type Data = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: BuzzBody = JSON.parse(req.body)

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

  // const apiEndpoint= `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`
  
  const apiEndpoint= `https://5gby2wvv.api.sanity.io/v2021-06-07/data/mutate/production`

  const result = await fetch(apiEndpoint, {
    headers: {
      'content-type': 'application/json',
      // Sending in authentication request
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
    },
    body: JSON.stringify(mutations),
    method: 'POST'
  })

  const json = await result.json();

  res.status(200).json({ message: 'Message Added' })
}
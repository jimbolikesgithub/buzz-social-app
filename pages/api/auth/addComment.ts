// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CommentBody } from '../../../typings'


type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const comment: CommentBody = JSON.parse(req.body)

  const mutations = {
    mutations: [
      {
        create: {
          _type: 'comment',
          comment: comment.comment,
          username: comment.username,
          profileImg: comment.profileImg,
          buzz: {
            _type: 'reference',
            _ref: comment.buzzId,
          },
        },
      },
    ],
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
    method: 'POST',
  })

  const json = await result.json()
  console.log(json)

  res.status(200).json({ message: 'Done!' })
}

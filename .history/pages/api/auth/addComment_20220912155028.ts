// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CommentBody } from '../../../typings'

type Data = {
  name: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const comment: CommentBody = JSON.parse(req.body)

  const mutations = {
    mutations: [
        {
            creat: {
                _type: 'comment',
                comment: comment.comment,
                username: comment.username,
                profileImg: comment.profileImg,
                tweet: {
                    _type: 'reference',
                    _ref: comment.buzzId,
                }
            },
        },
    ],
  }

  const result = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
            method: 'POST',
        }
    }
  ) 


  res.status(200).json({ name: 'John Doe' })
}
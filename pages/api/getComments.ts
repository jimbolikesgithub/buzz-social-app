// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Imports
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity';
import { Comment } from '../../typings';

// `$buzzId`, in groq, is known as a 'placeholder'
const commentQuery = groq`
*[_type == "comment" && references(*[_type== 'buzz' && _id == $buzzId]._id)] {
  _id,
...
} | order(_createdAt desc)
`

type Data = Comment[];
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { buzzId } = req.query;

  const comments: Comment[] = await sanityClient.fetch(commentQuery, {
    // buzzId: buzzId <-- either way works (IF same key - value pair)
    buzzId
  })

  console.log("Comments >>>", comments)

  res.status(200).json(comments)
}

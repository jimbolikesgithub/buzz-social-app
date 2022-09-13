// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Imports
import { groq } from 'next-sanity'

const commentQuery = groq`
*[_type == "comment" && references(*[_type== 'buzz' && _id == '83a34760-61d0-4186-8378-a906401de00d']._id)] {
  _id,
...
} | order(_createdAt desc)
`

type Data = {
  name: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

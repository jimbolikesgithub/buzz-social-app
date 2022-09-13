// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { s anityClient } from '../../sanity'
import { groq } from 'next-sanity'

// components
import { Buzz } from '../../typings'

const feedQuery = groq`
  *[_type == "buzz" && !blockBuzz] {
    _id,
  ...
  } | order(_createdAt desc)
`

// Assumed response
type Data = {
  buzz: Buzz[]
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const buzz: Buzz[] = await sanityClient.fetch(feedQuery)

  console.log(buzz)
  res.status(200).json({ buzz })
}

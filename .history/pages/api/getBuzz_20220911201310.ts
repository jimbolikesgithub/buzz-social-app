// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'

// components
import { Buzz } from '../../typings'

const feedQuery = groq``

// Assumed response
type Data = {
  buzz: Buzz[]
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  res.status(200).json({ name: 'John Doe' })
}

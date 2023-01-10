import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void>  {
  const test = await getToken({ req })
  const cookie = req.cookies
  console.log({ test, cookie })
  res.json({ message: 'Hello Everyone!' })
}
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug

  if (req.method === 'GET') {
    handleGET(slug, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:slug
async function handleGET(slug, res) {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { author: true },
  })
  res.json(post)
}
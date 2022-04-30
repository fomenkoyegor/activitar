import { PrismaClient, Prisma } from '@prisma/client'
import slugify from 'slugify'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    posts: {
      create: [
        {
          title: 'Join the Prisma Slack',
          slug: slugify('Join the Prisma Slack', {lower: true}),
          content: 'https://slack.prisma.io',
        },
      ],
    },
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    posts: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          slug: slugify('Follow Prisma on Twitter', {lower: true}),
          content: 'https://www.twitter.com/prisma',
        },
      ],
    },
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    posts: {
      create: [
        {
          title: 'Ask a question about Prisma on GitHub',
          slug: slugify('Ask a question about Prisma on GitHub', {lower: true}),
          content: 'https://www.github.com/prisma/prisma/discussions',
        },
        {
          title: 'Prisma on YouTube',
          slug: slugify('Prisma on YouTube', {lower: true}),
          content: 'https://pris.ly/youtube',
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

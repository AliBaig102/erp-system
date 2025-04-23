import { PrismaClient, Prisma } from '@/app/generated/prisma'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
	{
		name: 'Admin',
		email: 'admin@gmail.com',
		password: 'admin@123'
	},
	{
		name: 'User',
		email: 'user@gmail.com',
		password: 'user@123',
	}
]

export async function main() {
	for (const u of userData) {
		await prisma.user.create({ data: u })
	}
}

main()
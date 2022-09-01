import { PrismaClient } from '@prisma/client';

export default async function setup() {
	const prisma = new PrismaClient();
	await prisma.$connect();

	await prisma.review.deleteMany({ where: {} });
	await prisma.company.deleteMany({ where: {} });
	await prisma.user.deleteMany({ where: {} });

	await prisma.$disconnect();
}

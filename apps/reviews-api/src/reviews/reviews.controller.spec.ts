import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { DatabaseModule } from '../database/database.module';
import { DatabaseService } from '../database/database.service';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';

describe('ReviewsController', () => {
	const userId = '18010e97-6c8b-4d07-aaef-d005bf8c115d';
	const companyId = '1fb5049c-12fa-4b44-8abc-0503b75760b8';

	let app: INestApplication;
	let prisma: DatabaseService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [DatabaseModule],
			controllers: [ReviewsController],
			providers: [ReviewsService],
		}).compile();

		app = module.createNestApplication();
		prisma = module.get<DatabaseService>(DatabaseService);
		await app.init();

		await prisma.$transaction([
			prisma.user.create({
				data: { id: userId, email: 'user@example.com' },
			}),
			prisma.company.create({
				data: { id: companyId, name: 'Test Company' },
			}),
			prisma.review.create({
				data: {
					id: '18010e97-6c8b-4d07-aaef-d005bf8c115d',
					reviewerId: userId,
					companyId: companyId,
					createdOn: new Date().toISOString(),
				},
			}),
			prisma.review.create({
				data: {
					id: '70b44a35-6482-4066-b8fd-ade09958562e',
					reviewerId: userId,
					companyId: companyId,
					createdOn: new Date().toISOString(),
				},
			}),
		]);
	});

	afterEach(async () => {
		await prisma.review.deleteMany({ where: {} });
		await prisma.user.deleteMany({ where: {} });
		await prisma.company.deleteMany({ where: {} });
	});

	it('getReviewsCount() should return number of reviews', async () => {
		const response = await request(app.getHttpServer()).get('/reviews/count');
		expect(response.status).toBe(200);
		expect(response.body.reviewsCount).toBe(2);
	});
});

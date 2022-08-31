import { INestApplication } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { HealthController } from './health.controller';

describe('HealthController', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [HealthController],
			imports: [TerminusModule],
		}).compile();

		app = module.createNestApplication();
		await app.init();
	});

	it('should return health check status', async () => {
		const response = await request(app.getHttpServer()).get('/health');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe('ok');
	});
});

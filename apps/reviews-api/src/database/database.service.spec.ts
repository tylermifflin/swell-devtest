import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
	let service: DatabaseService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [DatabaseService],
		}).compile();

		service = module.get<DatabaseService>(DatabaseService);
	});

	it('should connect to database', () => {
		expect(service.$queryRaw`SELECT 1`).resolves.not.toBeUndefined();
	});
});

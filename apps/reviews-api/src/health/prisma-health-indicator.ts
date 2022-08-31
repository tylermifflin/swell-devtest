import { Injectable } from '@nestjs/common';
import { HealthCheckError, HealthIndicator } from '@nestjs/terminus';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PrismaHealthIndicator extends HealthIndicator {
	constructor(private prisma: DatabaseService) {
		super();
	}

	async isHealthy() {
		try {
			await this.prisma.$queryRaw`SELECT 1`;

			return this.getStatus('Prisma', true);
		} catch (error) {
			throw new HealthCheckError('Prisma check failed', error);
		}
	}
}

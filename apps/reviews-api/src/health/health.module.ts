import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { DatabaseModule } from '../database/database.module';
import { HealthController } from './health.controller';
import { PrismaHealthIndicator } from './prisma-health-indicator';

@Module({
	controllers: [HealthController],
	imports: [TerminusModule, DatabaseModule],
	providers: [PrismaHealthIndicator],
})
export class HealthModule {}

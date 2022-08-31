import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';

@Module({
	imports: [HealthModule, DatabaseModule],
	controllers: [],
	providers: [],
})
export class AppModule {}

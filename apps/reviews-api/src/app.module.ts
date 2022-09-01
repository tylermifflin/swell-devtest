import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
	imports: [HealthModule, DatabaseModule, ReviewsModule],
	controllers: [],
	providers: [],
})
export class AppModule {}

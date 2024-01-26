import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewExt, ReviewsCountResponse, ReviewsResponse } from './reviews.types';

@Controller('reviews')
export class ReviewsController {
	constructor(private reviewsService: ReviewsService) {}

	@Get()
	async getReviews(): Promise<ReviewsResponse> {
		const reviews: ReviewExt[] = await this.reviewsService.getAllReviewsWithDetails();
		return { reviews };
	}

	@Get('/count')
	async getReviewsCount(): Promise<ReviewsCountResponse> {
		const reviewsCount = await this.reviewsService.getReviewsCount();
		return { reviewsCount };
	}
}

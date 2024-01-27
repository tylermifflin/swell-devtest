import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import React, { useState, useEffect } from 'react';

/* eslint-disable-next-line */
export interface ReviewsListProps {}

interface Review {
	id: string;
	user: {
		firstName: string;
	};
	company: {
		name: string;
	};
	rating?: number;
	reviewText?: string;
	createdOn: string;
}

export function ReviewsList(props: ReviewsListProps) {
	const [reviews, setReviews] = useState<Review[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await fetch('/api/reviews');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				console.log(data);
				setReviews(data.reviews);
			} catch (error) {
				setError('Error fetching reviews');
			} finally {
				setLoading(false);
			}
		};
		fetchReviews();
	}, []);

	return (
		<div>
			{loading && (
				<Alert severity="info" icon={<TaskIcon />}>
					{' '}
					Loading reviews...
				</Alert>
			)}
			{error && (
				<Alert severity="error" icon={<TaskIcon />}>
					{' '}
					{error}
				</Alert>
			)}
			{!loading && !error && reviews.length === 0 && (
				<Alert severity="info"> icon={<TaskIcon />} No reviews found</Alert>
			)}
			{!loading && !error && reviews.length > 0 && (
				<div>
					{reviews.map((review) => (
						<div key={review.id}>
							{review.user.firstName} from {review.company.name} gave {review.rating} stars
							<br />
							{review.reviewText}
							<br />
							{review.createdOn}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default ReviewsList;

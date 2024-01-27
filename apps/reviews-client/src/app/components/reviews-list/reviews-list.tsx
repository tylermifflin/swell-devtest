import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import React, { useState, useEffect } from 'react';

/* eslint-disable-next-line */
export interface ReviewsListProps {}

interface Review {
	id: string;
	reviewer: {
		name: string;
	};
	company: {
		name: string;
	};
	rating?: number;
	text?: string;
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
		<Alert severity="error" icon={<TaskIcon />}>
			TODO: Implement ReviewsList
		</Alert>
	);
}

export default ReviewsList;

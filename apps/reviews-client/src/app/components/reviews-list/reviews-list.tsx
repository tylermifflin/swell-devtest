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
	return (
		<Alert severity="error" icon={<TaskIcon />}>
			TODO: Implement ReviewsList
		</Alert>
	);
}

export default ReviewsList;

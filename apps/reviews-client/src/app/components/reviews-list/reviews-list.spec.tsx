import { render, screen, waitFor } from '@testing-library/react';
import ReviewsList from './reviews-list';

describe('ReviewsList', () => {
	it('should render successfully', async () => {
		render(<ReviewsList />);
		await waitFor(() => screen.getByTestId('ReviewsList'));
	});

	it('should render list of reviews', async () => {
		render(<ReviewsList />);
		await waitFor(() => screen.getByTestId('ReviewsList'));
	});

	it('should display message if no reviews are found', async () => {
		render(<ReviewsList />);
		await waitFor(() => screen.getByTestId('No reviews found'));
	});

	it('should display the review text if provided', async () => {
		render(<ReviewsList />);
		await waitFor(() => screen.getByTestId('Review text'));
	});
});

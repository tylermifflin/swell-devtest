import { render } from '@testing-library/react';
import ReviewsList from './reviews-list';

describe('ReviewsList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ReviewsList />);
		expect(baseElement).toBeTruthy();
	});

	it('should render list of reviews', () => {
		const { getAllByTestId } = render(<ReviewsList />);
		const reviews = getAllByTestId('review');
		expect(reviews.length).toBeGreaterThan(0);
	});

	it('should display message if no reviews are found', () => {
		const { getByText } = render(<ReviewsList />);
		const message = getByText('No reviews found');
		expect(message).toBeTruthy();
	});

	it('should display the review text if provided', () => {
		const { getByText } = render(<ReviewsList />);
		const message = getByText('Great company');
		expect(message).toBeTruthy();
	});
});

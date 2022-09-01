import { render } from '@testing-library/react';
import ReviewsList from './reviews-list';

describe('ReviewsList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ReviewsList />);
		expect(baseElement).toBeTruthy();
	});

	it.todo('should render list of reviews');

	it.todo('should display message if no reviews are found');

	it.todo('should display the date of the review in a human readable format');

	it.todo('should display the name of the reviewer');

	it.todo('should display the name of the company');

	it.todo('should display the review text if provided');

	it.todo('should display the rating if provided');
});

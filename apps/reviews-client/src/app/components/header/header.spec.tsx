import { render, screen } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
	it('should render successfully', () => {
		render(<Header />);
		expect(screen.getByRole('heading', { name: /Swell Reviews/i })).toBeInTheDocument();
	});
});

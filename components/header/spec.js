import React from 'react';
import { render } from '@testing-library/react';
import Header from './';


describe('<Header />', () => {
	it('should render component', () => {
		const { getByText } = render(
			<Header />
		);

		expect(getByText('Cozinha')).toBeDefined();
		expect(getByText('Quarto')).toBeDefined();
		expect(getByText('Escritório')).toBeDefined();
		expect(getByText('Sala')).toBeDefined();

	});
});
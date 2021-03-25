import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Details from './';


describe('<Details />', () => {
	it('should render component', () => {
		const { getByText } = render(
			<Details
				name="Cadeira"
				id="1"
				value="123.45"
				gallery="sala"
				about="Lorem Ipsum"
			/>
		);

		expect(getByText('Cadeira')).toBeDefined();
		expect(getByText('R$ 123,45')).toBeDefined();
		expect(getByText('Lorem Ipsum')).toBeDefined();

	});
	it('should not render component if do not have valuw', () => {
		const { getByText } = render(
			<Details
				name="Mesa"
				id="1"
				gallery="cozinha"
			/>
		);

		waitFor(() => {
			expect(getByText('Mesa')).not.toBeDefined();
			expect(getByText('R$ 345,65')).not.toBeDefined();
		});

	});
});
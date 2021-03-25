import React from 'react';
import { render } from '@testing-library/react';
import Card from './';

describe('<Card />', () => {
	it('should render component', () => {
		const { getByText } = render(
			<Card
				name="Mesa"
				id="1"
				value="345.65"
				gallery="cozinha"
			/>
		);

		expect(getByText('Mesa')).toBeDefined();
		expect(getByText('R$ 345,65')).toBeDefined();
	});
});
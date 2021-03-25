import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../utils';
import { useRouter } from 'next/router';

const Product = () => {
	const { query } = useRouter();
    
	const { data } = useSWR(
		() => query.id && `/api/${query?.gallery}/${query?.id}`,
		fetcher
	);

	console.log(data);

	return (
		<p> testandooo </p>
	);
};

export default Product;
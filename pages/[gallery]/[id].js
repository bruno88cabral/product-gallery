import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../utils';
import { useRouter } from 'next/router';
import { Details } from '../../components';

const Product = () => {
	const { query } = useRouter();
    
	const { data } = useSWR(
		() => query.id && `/api/${query?.gallery}/${query?.id}`,
		fetcher
	);

	return (
		<Details
			id={data?.id}
			gallery={query?.gallery}
			name={data?.name}
			about={data?.about}
			value={data?.value}
		/>
	);
};

export default Product;
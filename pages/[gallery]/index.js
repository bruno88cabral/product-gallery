import React from 'react';
import Head from 'next/head';
import { fetcher } from '../../utils';
import { Header, Card } from '../../components';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import styles from '../../styles/globals.scss';

const Gallery = () => {
	const { query } = useRouter();
    
	const { data } = useSWR(
		() => query.gallery && `/api/${query?.gallery}`,
		fetcher
	);

	console.log(data);

	return (
		<>
			<Head>
				<title>Galeria de produtos</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<div className={styles.gallery}>
				{data && data.map(({ name, id, value }, i) => {
					return (
						<Card
							key={i}
							name={name}
							id={id}
							value={value}
							gallery={query.gallery}
						/>
					);
				})}
			</div>

		</>
	);
};

export default Gallery;
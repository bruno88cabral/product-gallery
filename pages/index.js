import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header } from '../components';
import Head from 'next/head';

const Home = () => {
	const router = useRouter();
	useEffect(() => {
		router.push('/quarto');
	}, []);
	return (
		<div>
			<Head>
				<title>Galeria de produtos</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				
			</main>

			<footer>
				
			</footer>
		</div>
	);
};

export default Home;

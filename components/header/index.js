import React from 'react';
import Link from 'next/link';
import { galleries } from '../../constants';
import Image from 'next/image';

import styles from './styles.scss';

const Header = () => {

	return (
		<header className={styles.header}>
			{Object.keys(galleries).map((key, i) => (
				<Link 
					key={i} 
					href={`/${key}`}>
					<div className={styles.content}>
						<Image 
							src={`/icon/${key}.svg`}
							height={50}
							width={50}
						/>
						<p>
							{ galleries[key] }
						</p>
					</div>
				</Link>
			))}
			
		</header>
	);
};

export default Header;
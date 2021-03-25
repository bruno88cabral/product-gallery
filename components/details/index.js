import React from 'react';
import PropTypes from 'proptypes';
import Image from 'next/image';
import styles from './styles.scss';
import { monetary } from '../../utils';
import BackPage from '../back-page';

const Details = ({
	id,
	gallery,
	name,
	about,
	value
}) => {
	return value ? (
		<>
			<BackPage />
			<section className={styles.details}>
				<div>
					<h2> 
						{ name }
					</h2>
					<Image 
						src={`/${gallery}/${id}.jpg`}
						height={300}
						width={300}
					/>
				</div>
				<div>
					<h3>
						{  monetary(value) }
					</h3>

					<p>
						{ about }
					</p>
				</div>
			</section>
		</>
	) : null;
};

Details.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	value: PropTypes.number,
	gallery: PropTypes.string,
	about: PropTypes.string
};


export default Details;
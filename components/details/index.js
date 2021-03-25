import React from 'react';
import PropTypes from 'proptypes';
import Image from 'next/image';
import styles from './styles.scss';
import { monetary } from '../../utils';

const Details = ({
	id,
	gallery,
	name,
	about,
	value
}) => {
	return (
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
					{ monetary(value) }
				</h3>

				<p>
					{ about }
				</p>
			</div>
		</section>
	);
};

Details.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	value: PropTypes.number,
	gallery: PropTypes.string,
	about: PropTypes.string
};


export default Details;
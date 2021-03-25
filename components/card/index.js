import React from 'react';
import PropTypes from 'proptypes';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.scss';

const Card = ({
	name,
	id,
	value, 
	gallery
}) => {
	return (
		<Link href={`/${gallery}/${id}`}>
			<div className={styles.card}>
				<Image
					src={`/${gallery}/${id}.jpg`}
					height={200}
					width={200}
				/>

				<dl>
					<dt>
						{ name }
					</dt>
					<dd>
                        R$ { String(value).replace('.', ',') }
					</dd>
				</dl>

			</div>
		</Link>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	value: PropTypes.number,
	gallery: PropTypes.string
};

export default Card;
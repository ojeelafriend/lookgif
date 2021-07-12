import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, gif }) => {
	return (
		<li className="animate__animated animate__bounces animate__bounceInDown">
			<img src={gif} alt={title} />
			<div>
				<h3>{title}</h3>
			</div>
		</li>
	);
};

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	gif: PropTypes.string.isRequired,
};

export default GifGridItem;

import React from 'react';

export const GifGridItem = ({ title, gif }) => {
	return (
		<div>
			<h3>{title}</h3>
			<img src={gif} alt={title} />
		</div>
	);
};

export default GifGridItem;

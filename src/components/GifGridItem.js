import React from 'react';

export const GifGridItem = ({ title, gif }) => {
	return (
		<li>
			<img src={gif} alt={title} />
			<div>
				<h3>{title}</h3>
			</div>
		</li>
	);
};

export default GifGridItem;

import React from 'react';

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

export default GifGridItem;

import React from 'react';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GridGif = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			{loading && <p>loading</p>}
			{/* <h3>{category}</h3> */}
			<div className="card-container">
				{images.map(({ id, title, gif }) => {
					return <GifGridItem key={id} title={title} gif={gif} />;
				})}
			</div>
		</>
	);
};

GridGif.propTypes = {
	category: PropTypes.string.isRequired,
};

export default GridGif;

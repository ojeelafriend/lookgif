import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GridGif from './components/GridGif';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Programming']);

	return (
		<>
			<div className="search-box">
				<h2>Search</h2>
				<AddCategory setCategories={setCategories} />
			</div>
			{categories.map((category) => (
				<GridGif key={category} category={category} />
			))}
		</>
	);
};

export default GifExpertApp;

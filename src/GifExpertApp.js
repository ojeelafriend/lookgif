import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GridGif from './components/GridGif';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Programming']);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			{categories.map((category) => (
				<GridGif key={category} category={category} /> //GridGif simula una especie de li, ahora abstraido del HOC
			))}
			<br />
		</>
	);
};

export default GifExpertApp;

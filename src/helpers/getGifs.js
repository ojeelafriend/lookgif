const getGifs = async (category) => {
	const apiKey = 'lDICKO8HcMY8he7RgTydb5h2sWPMbcAC';
	const res = await fetch(
		`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=2`
	);
	const { data } = await res.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			gif: img.images.downsized_medium.url,
		};
	});
	return gifs;
};

export default getGifs;

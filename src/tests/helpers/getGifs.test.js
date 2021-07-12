import getGifs from '../../helpers/getGifs';

describe('Function getGifs', () => {
	test('fetch gifs successfully', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});

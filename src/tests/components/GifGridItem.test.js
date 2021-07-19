import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Test <GifGridItem/>', () => {
	const image = {
		id: '3o7aTqfmFq4WwrKl7W',
		title: 'dancers choreo GIF by Justin',
		gif: 'https://media0.giphy.com/media/3o7aTqfmFq4WwrKl7W/giphy.gif?cid=2f7fc425myem6fm8b4k2mru76gfrci0992zl5tpjsl6hsjfk&rid=giphy.gif&ct=g',
	};

	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<GifGridItem title={image.title} gif={image.gif} />);
	});

	test('Snapshot the initial component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Render component with predetermined props: title, gif', () => {
		const img = wrapper.find('img');
		expect(img.prop('src')).toBe(image.gif);
		expect(img.prop('alt')).toBe(image.title);

		const title = wrapper.find('h3').text();
		expect(title).toBe(image.title);
	});

	test('Show animation: animate__bounceInDown', () => {
		expect(wrapper.find('li').hasClass('animate__bounceInDown')).toBe(true);
	});
});

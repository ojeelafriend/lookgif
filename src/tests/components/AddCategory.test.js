import { shallow } from 'enzyme';

import AddCategory from '../../components/AddCategory';

describe('Test <AddCategory/>', () => {
	const setCategories = () => {
		return ['Goku'];
	};

	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test('Success render <AddCategory/>', () => {
		expect(wrapper).toMatchSnapshot();
	});
});

import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import AddCategory from '../../components/AddCategory';

describe('Test <AddCategory/>', () => {
	const setCategories = jest.fn();

	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test('Success render <AddCategory/>', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('OnChange receive success', () => {
		const input = wrapper.find('input');
		const value = 'Test success';

		input.simulate('change', { target: { value } });

		expect(wrapper.find('p').text().trim()).toBe(value);
	});
	test('Not post onSubmit in the setCategories', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).not.toHaveBeenCalled();
	});
	test('If the input has word then post setCategories', () => {
		wrapper.find('input').simulate('change', { target: { value: 'One piece' } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).toHaveBeenCalled();
		expect(wrapper.find('p').text()).toBe('');
	});
	test('Call setCategories how function', () => {
		wrapper.find('input').simulate('change', { target: { value: 'One piece' } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
	});
});

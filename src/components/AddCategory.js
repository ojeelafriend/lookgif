import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputValue = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategories((category) => {
				return [inputValue, ...category];
			});
			setInputValue('');
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputValue}
					placeholder="press enter once you type"
					onChange={handleInputValue}
				/>
			</form>
			<p hidden={true}>{inputValue}</p>
		</>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

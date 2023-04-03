import React, { useState } from 'react';

const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = event => {
        setInputValue(event.target.value);
    };

    const onSubmit = event => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(prevCat => [...prevCat, inputValue]);
        onAddCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Find GIFs" value={inputValue} onChange={onInputChange} />
        </form>
    );
};

export default AddCategory;

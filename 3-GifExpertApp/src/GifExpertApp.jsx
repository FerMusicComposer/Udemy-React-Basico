import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = newCategory => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>App Component</h1>

            {/* The fn sent gets the value from the onSubmit event on the AddCategory form and uses that value to  
                set the state on the parent component, where it's defined.*/}
            <AddCategory onAddCategory={onAddCategory} />

            {/*Using composite index-value key */}
            {categories.map((category, index) => (
                <GifGrid key={`${index}-${category}`} category={category} />
            ))}
        </>
    );
};

export default GifExpertApp;

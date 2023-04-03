import { useState } from 'react';

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value, // This uses JS computed properties
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const onSubmit = (event, executeFormSubmission) => {
        event.preventDefault();

        executeFormSubmission();
        onResetForm();
    };

    return {
        ...formState, //allows to pass the structure of the form for easy destructuring when using the hook
        formState,
        onInputChange,
        onResetForm,
        onSubmit,
    };
};

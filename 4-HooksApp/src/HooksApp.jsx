import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
    Counter,
    CounterWithCustomHook,
    SimpleForm,
    SimpleFormWithCustomHook,
    MultipleCustomHooks,
    FocusScreen,
    Layout,
    Memorize,
    MemoHook,
    CallbackHook,
    Parent,
    TodoApp,
    MainApp,
} from './components';
import './components/useReducer/introReducer';

const HooksApp = () => {
    return (
        <div className="container">
            <Counter />
            <CounterWithCustomHook />
            <SimpleForm />
            <SimpleFormWithCustomHook />
            <MultipleCustomHooks />
            <FocusScreen />
            <Layout />
            <Memorize />
            <MemoHook />
            <CallbackHook />
            <Parent />
            <TodoApp />
            <BrowserRouter>
                <MainApp />
            </BrowserRouter>
        </div>
    );
};

export default HooksApp;

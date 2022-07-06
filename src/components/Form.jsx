import React, { useState } from 'react';

const Form = ({todos, setTodos}) => {
    const [inputText, setInputText] = useState('');

    const textChangeHandler = (e) => {
        setInputText(e.target.value);
    }
    const buttonHandler = (e) => {
        e.preventDefault();
        if(inputText !== '') {
            setTodos([
            ...todos,
            {text: inputText, id: Math.random() * 10000}
            ]);
        }
        setInputText('')
    }

    return (
        <form>
            <input className='input-text' value={inputText} onChange={textChangeHandler} type='text' />
            <button className='button-add' onClick={buttonHandler}>Add</button>
        </form>
    );
}

export default Form;
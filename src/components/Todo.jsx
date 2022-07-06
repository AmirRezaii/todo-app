import React from "react";

const Todo = ({todos, setTodos, item}) => {
    const delButtonHandler = () => {
        console.log(`item: $(item.id)`)
        setTodos(todos.filter((todo) => todo.id !== item.id))
    }

    return (
        <li className="item">
            <h3>{item.text}</h3>
            <button onClick={delButtonHandler}><i class="fa-solid fa-trash"></i></button>
        </li>
    );
}

export default Todo;
import React from 'react';
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
            <ul className='item-list'>{todos.map((todo) => (
                <Todo key={todo.id} item={todo} todos={todos} setTodos={setTodos} />
            ))}</ul>
        </div>
    );
}

export default TodoList;
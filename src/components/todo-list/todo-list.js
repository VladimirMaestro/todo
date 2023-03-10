import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ todos,onDeleted,
onToggleImportant,
onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          { ...itemProps }
          onDeleted={()=> onDeleted(id)}
        onToggleImportant={()=> onToggleImportant(id)}
        onToggleDone={()=> onToggleDone(id)}

          />
          {/* onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
          onDelete={ () => onDelete(id) } /> */}
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default TodoList;
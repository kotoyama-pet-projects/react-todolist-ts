import React from "react";
import { observer, inject } from "mobx-react";

import "./todolist.styles.scss";

import { ITodoListProps } from "./todolist.interface";
import { TodoItem } from "components/view/TodoItem";

const TodoList: React.FC<ITodoListProps> = inject("TodoListStore")(
  observer(({ todoList }) => {
    const { todos, removeTodo, currentView } = todoList;

    return (
      <div className="todos">
        <ul className="todos__list">
          {todos.map((todo) => (
            <TodoItem key={todo.item.id} todo={todo} onDelete={removeTodo} />
          ))}
        </ul>
      </div>
    );
  })
);

export default TodoList;

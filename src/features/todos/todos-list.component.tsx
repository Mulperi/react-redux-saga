import React from "react";
import { Todo } from "../../shared/models/todo.model";

interface TodosListProps {
  todos: Todo[];
}
const TodosList: React.FunctionComponent<TodosListProps> = (
  props: TodosListProps
) => {
  return (
    <div>
      <div>TodosList</div>
      <ul>
        {props.todos.map((todo) => (
          <li>
            {todo.id}, {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;

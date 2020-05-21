import React from "react";
import { Todo } from "../../shared/models/todo.model";

interface TodosListProps {
  todos: Todo[];
  page: number;
  changePage: any;
}
const TodosList: React.FunctionComponent<TodosListProps> = (
  props: TodosListProps
) => {
  return (
    <div>
      <div>TodosList</div>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>
            {todo?.id}, {todo?.title}
          </li>
        ))}
      </ul>
      <div>
        <ul>
          <li>
            <button
              disabled={props.page === 1}
              onClick={() => props.changePage(1, 3)}
            >
              page 1
            </button>
          </li>
          <li>
            <button
              disabled={props.page === 2}
              onClick={() => props.changePage(2, 3)}
            >
              page 2
            </button>
          </li>
          <li>
            <button
              disabled={props.page === 3}
              onClick={() => props.changePage(3, 3)}
            >
              page 3
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodosList;

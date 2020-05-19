import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as todos from "../../store/reducers/todos.reducer";
import { Switch, Route } from "react-router-dom";
import TodosList from "./todos-list.component";
import * as fromTodos from "../../store/selectors/todos.selectors";

const Todos: React.FunctionComponent<any> = () => {
  const dispatch = useDispatch();
  const todosCurrentPage = useSelector(fromTodos.selectTodosAsArray);
  useEffect(() => {
    dispatch(todos.get());
  }, [dispatch]);

  return (
    <React.Fragment>
      <section>todos feature</section>
      <section>
        <Switch>
          <Route path="/">
            <TodosList todos={todosCurrentPage} />
          </Route>
        </Switch>
      </section>
    </React.Fragment>
  );
};

export default Todos;

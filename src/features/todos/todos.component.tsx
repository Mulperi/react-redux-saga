import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosGet } from "../../store/reducers/todos.reducer";
import { Switch, Route } from "react-router-dom";
import TodosList from "./todos-list.component";
import {
  selectTodosAsArryCurrentPage,
  selectTodosPage,
} from "../../store/selectors/todos.selectors";

const Todos: React.FunctionComponent<any> = () => {
  const dispatch = useDispatch();
  const todosCurrentPage = useSelector(selectTodosAsArryCurrentPage);
  const currentPage = useSelector(selectTodosPage);

  useEffect(() => {
    dispatch(todosGet({ page: 1, pageSize: 3 }));
  }, [dispatch]);

  const changePage = (page: number, pageSize: number) => {
    dispatch(todosGet({ page, pageSize }));
  };

  return (
    <React.Fragment>
      <section>
        <h2>Todos Feature Component</h2>
      </section>
      <section>
        <Switch>
          <Route path="/">
            <TodosList
              todos={todosCurrentPage}
              changePage={changePage}
              page={currentPage}
            />
          </Route>
        </Switch>
      </section>
    </React.Fragment>
  );
};

export default Todos;

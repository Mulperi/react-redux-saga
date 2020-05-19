import { createSelector } from "reselect";
import { RootState } from "../root.reducer";
import { TodosState } from "../reducers/todos.reducer";
import { Todo } from "../../shared/models/todo.model";

const selectFeatureTodos = (state: RootState) => state.todos as TodosState;

export const selectTodosEntities = createSelector(
  [selectFeatureTodos],
  (state) => state.entities as { [key: string]: Todo }
);

export const selectTodosAsArray = createSelector(
  [selectTodosEntities],
  (entities) => Object.keys(entities).map((id) => entities[id])
);

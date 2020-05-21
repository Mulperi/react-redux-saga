import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../shared/models/todo.model";

export interface TodosState {
  entities: { [key: string]: Todo };
  loading: boolean;
  page: number;
  pageSize: 3;
  pagination: number[];
  entitiesTrack: number[];
  maxThreshold: number;
  errorMessage: string | null;
}

export const initialState: TodosState = {
  entities: {},
  page: 1,
  pageSize: 3,
  loading: false,
  pagination: [],
  entitiesTrack: [],
  maxThreshold: 6,
  errorMessage: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todosGet(state, { payload }) {
      state.loading = true;
      state.page = payload.page;
    },
    todosGetSuccess(state, { payload }) {
      state.loading = false;
      payload.todos.forEach((todo: Todo, index: number) => {
        // Update tracking and remove items if threshold exceeded
        state.entitiesTrack.unshift(todo.id);
        if (state.entitiesTrack.length > state.maxThreshold) {
          const position = state.entitiesTrack.length - 1;
          const lastItem = state.entitiesTrack[position];
          delete state.entities[lastItem];
          state.entitiesTrack = state.entitiesTrack.slice(0, position);
        }

        // Set entity to state
        state.entities[todo.id] = todo;

        // Set pagination
        state.pagination[state.page * state.pageSize - state.pageSize + index] =
          todo.id;
      });
    },
    todosFailed(state, { payload }) {
      state.loading = false;
      state.errorMessage = payload.errorMessage;
    },
  },
});

export function todosUpdateEntitiesTrack() {}

export const { todosGet, todosGetSuccess, todosFailed } = todosSlice.actions;

export default todosSlice.reducer;

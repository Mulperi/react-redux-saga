import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../shared/models/todo.model";

export interface TodosState {
  entities: { [key: string]: Todo };
  pagination: string[];
  loading: boolean;
}

export const initialState: TodosState = {
  entities: {
    1: { id: 1, title: "first" },
  },
  pagination: [],
  loading: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    get(state) {
      state.loading = true;
    },
    getSuccess(state, action) {
      state.loading = true;
      action.payload.todos.forEach((todo: Todo) => {
        state.entities[todo.id] = todo;
      });
    },
  },
});

export const { get, getSuccess } = todosSlice.actions;

export default todosSlice.reducer;

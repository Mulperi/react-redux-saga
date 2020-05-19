import { put, takeEvery } from "redux-saga/effects";
import * as todos from "../../store/reducers/todos.reducer";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  yield delay(1000);
  yield put(
    todos.getSuccess({
      todos: [
        { id: 2, title: "second" },
        { id: 3, title: "third" },
      ],
    })
  );
}

export function* watchTodosActions() {
  yield takeEvery(todos.get, incrementAsync);
}

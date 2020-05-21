import { put, takeEvery, call } from "redux-saga/effects";
import { TodosService } from "../../shared/services/todos.service";
import {
  todosGet,
  todosGetSuccess,
  todosFailed,
} from "../reducers/todos.reducer";

const todosService = new TodosService();

function* todosGetEffect(action: any) {
  const { page, pageSize } = action.payload;
  try {
    const todos = yield call(todosService.getTodos, page, pageSize);
    yield put(
      todosGetSuccess({
        todos,
      })
    );
  } catch (errorMessage) {
    yield put(todosFailed({ errorMessage }));
  }
}

function* watchTodosActions() {
  yield takeEvery(todosGet, todosGetEffect);
}

export default watchTodosActions;

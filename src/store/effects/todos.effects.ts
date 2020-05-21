import { put, takeEvery, call } from "redux-saga/effects";
import { TodosService } from "../../shared/services/todos.service";
import {
  todosGet,
  todosGetSuccess,
  todosGetFailed,
  todosDelete,
  todosDeleteSuccess,
  todosDeleteFailed,
} from "../reducers/todos.reducer";

function* todosGetEffect(action: any) {
  const { page, pageSize } = action.payload;
  try {
    const { total, todos } = yield call(TodosService.todosGet, page, pageSize);
    yield put(
      todosGetSuccess({
        total,
        todos,
      })
    );
  } catch (errorMessage) {
    yield put(todosGetFailed({ errorMessage }));
  }
}

function* todosDeleteEffect(action: any) {
  const { id } = action.payload;
  try {
    const todos = yield call(TodosService.todosDelete, id);
    yield put(
      todosDeleteSuccess({
        todos,
      })
    );
  } catch (errorMessage) {
    yield put(todosDeleteFailed({ errorMessage }));
  }
}

function* watchTodosActions() {
  yield takeEvery(todosGet, todosGetEffect);
  yield takeEvery(todosDelete, todosDeleteEffect);
}

export default watchTodosActions;

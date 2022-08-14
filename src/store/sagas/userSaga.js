import { put, takeEvery } from "redux-saga/effects";
import { createUser } from "../../services/userService";
import userActionTypes from "../actions/user/userActionTypes";
import { userAction } from "../actions/user/userActions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* createUserWorker(action) {
  try {
    yield createUser(action.payload.user);
    yield put(userAction.createUserSuccess(action.payload.user));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

export function* watchCreateUser() {
  yield takeEvery(userActionTypes.CREATE_REQUEST, createUserWorker);
}

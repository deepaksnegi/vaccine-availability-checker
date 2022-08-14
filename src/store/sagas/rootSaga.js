import { all } from "redux-saga/effects";
import { watchCreateUser } from "./userSaga";

export default function* rootSaga() {
  yield all([watchCreateUser()]);
}

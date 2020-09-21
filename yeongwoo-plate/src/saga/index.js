import { spawn, put, takeEvery } from "redux-saga/effects";
import * as api from "../api";
import { fetchDataSucceeded, fetchDataFailed, CALL_DATA } from "../actions";

function* fetchStoresData(params) {
  const { data } = yield api.fetchStores(params.params);
  try {
    yield put(fetchDataSucceeded(data));
  } catch (error) {
    yield put(fetchDataFailed(error.message));
  }
}

function* watchCall() {
  yield takeEvery(CALL_DATA, fetchStoresData);
}

export default function* root() {
  yield spawn(watchCall);
}

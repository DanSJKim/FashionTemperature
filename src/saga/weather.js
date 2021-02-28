import { all } from 'redux-saga/effects';

function* getCurrentLocationSaga() {
  // yield takeEvery(GET_CURRENT_LOCATION_REQUEST, getCurrentLocation);
}

export function* weatherSaga() {
  yield all([getCurrentLocationSaga()]);
}

export default weatherSaga;

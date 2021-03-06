import { all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-named-as-default
import weatherSaga from './weather';

export function* rootSaga() {
  yield all([weatherSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootSaga;

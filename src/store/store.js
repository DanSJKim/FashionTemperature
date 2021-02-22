import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import reducer from './src/reducers/index';
import rootSaga from './src/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;

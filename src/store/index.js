import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';

const sagaMonitor = null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

export default store;

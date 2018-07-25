1import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createHashHistory } from 'history';
import { devToolsEnhancer } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import mySaga from 'sagas';
import reducers from 'reducers';
import { whitelist, blacklist } from 'reducers/persist-keys';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);

export const history = createHashHistory();
const historyMiddleware = routerMiddleware(history);

const Store = createStore(rootReducer, undefined,
  compose(applyMiddleware(historyMiddleware),
    applyMiddleware(sagaMiddleware),
    autoRehydrate(), // auto persistence
    devToolsEnhancer ? devToolsEnhancer() : (f) => f),
);

sagaMiddleware.run(mySaga);
// begin periodically persisting the store
persistStore(Store, { whitelist, blacklist });
export default Store;
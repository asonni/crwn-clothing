import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === 'development') middlewares.push(reduxLogger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };

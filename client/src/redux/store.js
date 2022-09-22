import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import entriesReducer from './reducers/entriesReducer';
import entriesSagaWatcher from './sagas/entriesSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    entries: entriesReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(entriesSagaWatcher);

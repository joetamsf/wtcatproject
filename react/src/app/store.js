import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cLReducer from '../features/changelogs/changeLogsSlice';
import beginnersReducer from '../features/beginners/beginnersSlice';
// import catsReducer from '../features/cats/catsSlice';
import catsReducer from '../features/cats/catsSlice';
import appReducer from '../features/app/appSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    changelog: cLReducer,
    beginner: beginnersReducer,
    cat: catsReducer,
    app: appReducer
  },
});

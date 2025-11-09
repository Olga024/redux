import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from './reducers';

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
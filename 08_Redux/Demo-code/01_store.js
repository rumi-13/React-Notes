import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter/counterSlice';

/*
1. Import configureStore from Redux Toolkit to create the Redux store.
2. Create the store by calling configureStore with an object.
3. Inside this object, define the reducers to manage different parts of the state.
4. Import your slice reducer (counterSlice here) and assign it under the `reducer` key.
   This connects the slice to the store.
5. To use the store in your React components, create typed hooks:
   a) useAppSelector — for selecting state data from the store.
   b) useAppDispatch — for dispatching actions to update the state.
*/

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

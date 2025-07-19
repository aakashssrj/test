import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlices.js' 

export const store = configureStore({
  reducer: {
    counter :  counterReducer
  },
})
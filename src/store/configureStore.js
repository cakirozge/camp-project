
// store/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export default function configureAppStore() {
  return configureStore({
    reducer: rootReducer,
  });
}



//chrome eklentilerine redux devtools kur.

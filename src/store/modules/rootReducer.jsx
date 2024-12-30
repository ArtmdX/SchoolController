import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/reducer';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;

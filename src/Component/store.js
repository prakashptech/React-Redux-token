// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import employeeReducer from './EmpReducer';

const rootReducer = combineReducers({
  employee: employeeReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

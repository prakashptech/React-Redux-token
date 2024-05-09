// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { employeeReducers } from './Reducers/employeeReducers';
import { authReducers } from './Reducers/authReducers';

const rootReducer = combineReducers({
    auth:authReducers,
  employees: employeeReducers,
  // Add other reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

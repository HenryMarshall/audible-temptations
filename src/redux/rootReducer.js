import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import auth from './modules/Auth';
import books from './modules/Books';

export default combineReducers({
  counter,
  auth,
  books,
  router
})

import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import auth from './modules/Auth';

export default combineReducers({
  counter,
  auth,
  router
})

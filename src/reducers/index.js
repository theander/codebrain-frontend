import { combineReducers } from 'redux'
import shopCartReducer from './shopCartReducer'
import shopReducer from './shopReducer';

const reducer = combineReducers({
  shopCartReducer,shopReducer
})

export default reducer;

import { combineReducers }  from 'redux'
import * as IndexPageReducers from './IndexPage'

const rootReducer = combineReducers({
  ...IndexPageReducers,
})
export default rootReducer
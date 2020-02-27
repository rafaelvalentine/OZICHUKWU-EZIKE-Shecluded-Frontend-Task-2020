import Cats from './CatReducer'
import LOTR from './LOTRReducer'
import Loading from './LoadingReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  Cats,
  LOTR,
  Loading
})

export default rootReducers
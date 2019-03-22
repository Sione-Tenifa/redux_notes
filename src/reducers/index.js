import { combineReducers, } from 'redux'
import notes from './notes'
import nextId from './nextId'

const rootReducers = combineReducers({
  notes,
  nextId, 
})

export default rootReducers
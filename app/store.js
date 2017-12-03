import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const state = window ? window.__PRELOADED_STATE__ : {}
const store = createStore(
  reducer,
  state,
  applyMiddleware(thunk)
)

export default store

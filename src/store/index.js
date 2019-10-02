import {combineReducers, createStore} from "redux";
import {words, numbers} from "../reducers";

const reducer = combineReducers({numbers, words});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

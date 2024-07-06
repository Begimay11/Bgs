
import { applyMiddleware, combineReducers, createStore } from "redux";
import { fireBasetodoReducer } from "./reducers/fb-todo";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  firebaseTodo: fireBasetodoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

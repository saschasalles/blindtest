import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from "redux-thunk";
import { playerReducer } from "./playerReducer";
import { appReducer } from "./appReducer";

export const store = createStore(
  combineReducers({
    app: appReducer,
    player: playerReducer,
  }),
  applyMiddleware(thunk)
);

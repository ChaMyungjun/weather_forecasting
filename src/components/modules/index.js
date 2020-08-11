import { combineReducers } from "redux";
import weather, { weatherSaga } from "./weather";
import loading from "./loading";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  weather,
  loading,
});

export function* rootSaga() {
  yield all([weatherSaga()]);
}

export default rootReducer;

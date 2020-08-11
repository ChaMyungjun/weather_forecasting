import { createAction, handleActions, handleAction } from "redux-actions";
import * as weatherAPI from "../../lib/api";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";

const [WEATHER, WEATHER_SUCCESS, WEATHER_FAILURE] = createRequestActionTypes(
  "weather/WEATHER"
);

export const weather = createAction(WEATHER, ({ nx, ny }) => ({
  nx,
  ny,
}));

const weahterReadSaga = createRequestSaga(WEATHER, weatherAPI.weather);
export function* weatherSaga() {
  yield takeLatest(WEATHER, weahterReadSaga);
}

const initialState = {
  weather: null,
  error: null,
};

const weather = handleActions(
  {
    [WEATER_SUCCESS]: (state, { payload: weather }) => ({
      ...state,
      weather,
    }),
    [WEATHER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default weather;

import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as weatherAPI from "../../lib/api/weather";
import { takeLatest } from "redux-saga/effects";

const [WEATHER, WEATHER_SUCCESS, WEATHER_FAILURE] = createRequestActionTypes(
  "weather/WEATHER"
);

export const weatherRead = createAction(WEATHER, ({ nx, ny }) => ({
  nx,
  ny,
}));

const readWeatherSaga = createRequestSaga(WEATHER, weatherAPI.weather);
export function* weatherSaga() {
  yield takeLatest(WEATHER, readWeatherSaga);
}

const initialState = {
  data: null,
  error: null,
};

const weather = handleActions(
  {
    [WEATHER_SUCCESS]: (state, { nx, ny }) => ({
      ...state,
      nx,
      ny,
    }),
    [WEATHER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default weather;

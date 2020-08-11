import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as weatherAPI from "../../lib/api/index";
import {takeLatest} from 'redux-saga/effects'

const [WEATHER, WEATHER_SUCCESS, WEATHER_FAILURE] = createRequestActionTypes(
  "weather/WEATHER"
);

export const weatherRead = createAction(WEATHER, (nx) => (nx));

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
    [WEATHER_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    [WEATHER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default weather;

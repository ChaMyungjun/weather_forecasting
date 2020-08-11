import {createAction, handleActions} from 'redux-actions'
import * as weatherAPI from '../../lib/api'
import {takeLatest} from 'redux-saga/effects'

const WEATHER = 'weather/WEATHER'
const WEATHER_FAILURE = 'weather/WEATHER_FAILURE'
const WEATHER_SUCCESS = 'weather/WEATHER_SUCCESS'

export const weather = createAction(WEATHER, ({nx, ny}) => ({
    nx, 
    ny
}))

const weahter
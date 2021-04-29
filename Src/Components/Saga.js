import {all, call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import * as Navigation from '../Utils/HelperNav';
import {setListData, setListWeather, setLoading} from './Action';
function* GetSagaWeather(payload) {
  try {
    yield put(setLoading(true));
    const config = {
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${payload.city}&units=metric&lang=id&appid=7e2e0eda0053587d8fc383a0a9d1280e`,
      headers: {
        'X-CMC_PRO_API_KEY': '8f620108-3fba-4670-8e2a-fecaa8f50db9',
      },
    };
    const respond = yield axios.get(config.url, {headers: config.headers});
    yield put(setListData(respond.data.list));

    yield Navigation.navigate({
      name: 'Weather',
      params: {},
    });
  } catch (error) {
    console.log('error data', error);
  } finally {
    yield put(setLoading(false));
  }
}
export const WeatherSaga = function* () {
  yield takeLatest('CITY', GetSagaWeather);
};

import { take } from 'redux-saga/effects';
import { REHYDRATION_COMPLETE } from './rootReducer';

export default function* rootSaga() {
  yield take(REHYDRATION_COMPLETE);
  // add sagas here
}

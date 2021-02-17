import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {fetchEtfIndustries} from '../../apis/finnhub/etfIndustriesService';
import * as actions from "../actions/etfs";
import * as actionTypes from "../actions/actionTypes";

function* onLoadIndustries({symbol}: actionTypes.GetEtfIndustriesAction) {
    yield put(actions.getEtfIndustriesRequest());
    const {data: {sectorExposure}} = yield call(fetchEtfIndustries, symbol);
    yield put(actions.getEtfIndustriesSuccess(sectorExposure));
}

function* watchGetEtfIndustries() {
    yield takeEvery(actionTypes.GET_ETFINDUSTRIES, onLoadIndustries);
}

export default function* etfIndustriesSaga() {
    yield all([fork(watchGetEtfIndustries)]);
}

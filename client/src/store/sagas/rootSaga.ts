import {all, fork} from "redux-saga/effects";
import EtfIndustriesSaga from "./getEtfIndustriesSaga";

export default function* rootSaga() {
    yield all([fork(EtfIndustriesSaga)]);
}

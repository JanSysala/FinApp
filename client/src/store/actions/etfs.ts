import {SectorExposure} from './../reducers/etfIndustriesReducer';
import * as actions from "./actionTypes";

export function setEtfIndustries(sectorExposure: SectorExposure[]): actions.SetEtfIndustriesAction {
    return {
        type: actions.SET_ETFINDUSTRIES,
        sectorExposure
    };
}

export function getEtfIndustries(
    symbol: string
): actions.GetEtfIndustriesAction {
    return {
        type: actions.GET_ETFINDUSTRIES,
        symbol
    };
}

export function getEtfIndustriesRequest(): actions.GetEtfIndustriesRequestAction {
    return {
        type: actions.GET_ETFINDUSTRIES_REQUEST
    };
}

export function getEtfIndustriesSuccess(
    sectorExposure: SectorExposure[]
): actions.GetEtfIndustriesSuccessAction {
    return {
        type: actions.GET_ETFINDUSTRIES_SUCCESS,
        sectorExposure
    };
}

// export function getEtfIndustriesFailure(
//     error: Error | string
// ): actions.GetEtfIndustriesFailureAction {
//     return {
//         type: actions.GET_ETFINDUSTRIES_FAILURE,
//         error
//     };
// }

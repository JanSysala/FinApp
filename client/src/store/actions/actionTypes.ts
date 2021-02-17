import {SectorExposure} from "../reducers/etfIndustriesReducer";

export const SET_ETFINDUSTRIES = "SET_ETFINDUSTRIES";

export interface SetEtfIndustriesAction {
    type: typeof SET_ETFINDUSTRIES;
    sectorExposure: SectorExposure[];
}

export const GET_ETFINDUSTRIES = "GET_ETFINDUSTRIES";

export interface GetEtfIndustriesAction {
    type: typeof GET_ETFINDUSTRIES;
    symbol: string;
}

export const GET_ETFINDUSTRIES_SUCCESS = "GET_ETFINDUSTRIES_SUCCESS";

export interface GetEtfIndustriesSuccessAction {
    type: typeof GET_ETFINDUSTRIES_SUCCESS;
    sectorExposure: SectorExposure[];
}

export const GET_ETFINDUSTRIES_FAILURE = "GET_ETFINDUSTRIES_FAILURE";

export interface GetEtfIndustriesFailureAction {
    type: typeof GET_ETFINDUSTRIES_FAILURE;
    error: Error | string;
}

export const GET_ETFINDUSTRIES_REQUEST = "GET_ETFINDUSTRIES_REQUEST";

export interface GetEtfIndustriesRequestAction {
    type: typeof GET_ETFINDUSTRIES_REQUEST;
}

export type EtfIndustriesAction =
    | SetEtfIndustriesAction
    | GetEtfIndustriesAction
    | GetEtfIndustriesFailureAction
    | GetEtfIndustriesSuccessAction
    | GetEtfIndustriesRequestAction;

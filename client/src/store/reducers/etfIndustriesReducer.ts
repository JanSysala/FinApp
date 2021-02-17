import * as actions from "../actions/actionTypes";

export interface SectorExposure {
    exposure: string,
    industry: string
}

export interface IndustriesState {
    sectorExposure: SectorExposure[]
}

const initialState: IndustriesState = {
    sectorExposure: []
};

export default function etfIndustriesReducer(
    state: IndustriesState = initialState,
    action: actions.EtfIndustriesAction
): any {
    switch (action.type) {
        case actions.SET_ETFINDUSTRIES:
        case actions.GET_ETFINDUSTRIES_SUCCESS:
            return {
                sectorExposure: action.sectorExposure
            };
        default:
            return state;
    }
}

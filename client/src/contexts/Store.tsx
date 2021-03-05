import React from 'react'
import {EtfSectorExposure} from "../models/etfSectorExposure";
import {GET_ETFINDUSTRIES, GET_ETFSYMBOLS} from "../actions/actionTypes";

export interface EtfsState {
    sectorExposure: EtfSectorExposure[],
    etfSymbols: string[]
}

interface IAction {
    type: string,
    payload: any
}

const initialState: EtfsState = {
    sectorExposure: [],
    etfSymbols: []
};

export const Store = React.createContext<EtfsState | any>(initialState);

function reducer(state: EtfsState, action: IAction): EtfsState {
    switch (action.type) {
        case GET_ETFINDUSTRIES:
            return { ...state, ...action.payload }
        case GET_ETFSYMBOLS:
            return { ...state, etfSymbols: action.payload }
        default:
            return state;
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}

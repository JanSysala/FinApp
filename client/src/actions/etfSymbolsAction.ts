import axios from 'axios'
import {GET_ETFSYMBOLS, getEtfSymbolsResponse} from "./actionTypes";
import React from "react";

type Action = {
    type: typeof GET_ETFSYMBOLS,
    payload: getEtfSymbolsResponse
}

export const getEtfSymbols = async (dispatch: React.Dispatch<Action>) => {
    const res = await axios.get(`http://localhost:9001/api/v1/stock/symbol?exchange=US&securityType=ETP&token=${process.env.REACT_APP_FINNHUB_API_TOKEN}`);
    return dispatch({
        type: GET_ETFSYMBOLS,
        payload: res.data
    })
}

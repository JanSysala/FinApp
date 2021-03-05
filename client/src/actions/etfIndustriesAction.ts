import axios from 'axios'
import {GET_ETFINDUSTRIES, getEtfIndustriesResponse} from "./actionTypes";
import React, {Dispatch} from "react";

type Action = {
    type: typeof GET_ETFINDUSTRIES,
    payload: getEtfIndustriesResponse
}

export const getEtfIndustries = async (symbol: string, dispatch: React.Dispatch<Action>) => {
    const res = await axios.get(`http://localhost:9001/api/v1/etf/sector?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_TOKEN}`);
    return dispatch({
        type: GET_ETFINDUSTRIES,
        payload: res.data
    })
}

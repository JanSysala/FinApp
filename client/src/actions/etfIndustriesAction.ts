import axios from 'axios'
import {GET_ETFINDUSTRIES} from "./actionTypes";
import React from "react";
import {GetEtfSectorResponse} from "../models/etfSectorExposure";

type Action = {
    type: typeof GET_ETFINDUSTRIES,
    payload: GetEtfSectorResponse
}

export const getEtfIndustries = async (symbol: GetEtfSectorResponse['data']['symbol'], dispatch: React.Dispatch<Action>) => {
    const res = await axios.get(`http://localhost:9001/api/v1/etf/sector?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_TOKEN}`);
    return dispatch({
        type: GET_ETFINDUSTRIES,
        payload: res.data
    })
}

import axios from 'axios'
import {EtfSectorExposure} from "../models/etfSectorExposure";
import {GET_ETFINDUSTRIES} from "./actionTypes";

interface industriesResponse {
    sectorExposure: EtfSectorExposure[]
}

export const getEtfIndustries = async (symbol: string, dispatch: any) => {
    const res = await axios.get(`http://localhost:9001/api/v1/etf/sector?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_TOKEN}`);
    return dispatch({
        type: GET_ETFINDUSTRIES,
        payload: res.data
    })
}

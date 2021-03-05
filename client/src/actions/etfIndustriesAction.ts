import axios from 'axios'
import {GET_ETFINDUSTRIES} from "./actionTypes";

export const getEtfIndustries = async (symbol: string, dispatch: any) => {
    const res = await axios.get(`http://localhost:9001/api/v1/etf/sector?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_TOKEN}`);
    return dispatch({
        type: GET_ETFINDUSTRIES,
        payload: res.data
    })
}

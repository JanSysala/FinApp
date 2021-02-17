import axios from "axios";
import {SectorExposure} from "../../store/reducers/etfIndustriesReducer";

interface industriesResponse {
    sectorExposure: SectorExposure[]
}

// export async function fetchEtfIndustries(
//     symbol: string
// ): Promise<industriesResponse> {
//     return await axios.get(`http://localhost:9001/api/v1/etf/sector?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_TOKEN}`);
// }

export async function fetchEtfIndustries(
    symbol: string
): Promise<any> {
    return await axios.get(`http://localhost:9001/api/v1/etf/sector?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_TOKEN}`);
}

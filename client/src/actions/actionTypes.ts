export const GET_ETFINDUSTRIES = "GET_ETFINDUSTRIES";
export const GET_ETFSYMBOLS = "GET_ETFSYMBOLS";

export interface getEtfSymbolsResponse {
    data: {
        currency: string,
        description: string,
        displaySymbol: string,
        figi: string,
        mic: string,
        symbol: string,
        type: string
    }
}

export interface getEtfIndustriesResponse {
    data: {
        sectorExposure: [
            {
                exposure: number,
                industry: string
            }
        ],
        symbol: string
    }
}
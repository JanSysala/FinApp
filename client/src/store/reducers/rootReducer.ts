import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import etfIndustriesReducer from "./etfIndustriesReducer";
import isLoadingReducer from "./isLoadingReducer";


const rootReducer = combineReducers({
    sectorExposure: etfIndustriesReducer,
    isLoading: isLoadingReducer,
    error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

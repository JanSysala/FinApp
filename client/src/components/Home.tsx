import * as React from 'react';
import Navbar from "./Navbar";
import {Instruments} from "./Instruments";
import {EtfIndustries} from "./EtfIndustries";

export const Home: React.FC = () => {
    return (
        <>
            <Navbar/>
            <Instruments/>
            <EtfIndustries/>
        </>
    )
}

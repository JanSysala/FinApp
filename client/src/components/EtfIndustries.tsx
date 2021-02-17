import * as React from 'react';
import {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Axis, Chart, Coordinate, Interval, Legend, Tooltip} from 'bizcharts';
import {getEtfIndustries} from '../store/actions';

export const EtfIndustries: React.FC = () => {
    const [symbol, setSymbol] = useState('');
    const [sentSymbol, setSentSymbol] = useState('');

    const industries = useSelector((state: any) => state);
    // const error = useSelector((state: any) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            dispatch(getEtfIndustries(sentSymbol))
        };
        fetchData();
    }, [sentSymbol, dispatch])

    const chartCols = {
        percent: {
            formatter: (val: any) => {
                val = val * 100 + '%';
                return val;
            },
        },
    };

    return (
        <>
            <form onSubmit={(event) => {
                setSentSymbol(symbol);
                event.preventDefault()
            }}>
                <input
                    type="text"
                    aria-label={'Symbol'}
                    value={symbol}
                    placeholder=""
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSymbol(e.target.value)}
                />
                <button type="submit" aria-label="search">
                    Search
                </button>
            </form>
            {/* <p>{error}</p> */}
            <Chart height={400} scale={chartCols} data={industries.sectorExposure.sectorExposure} autoFit>
                <Coordinate type="theta" radius={0.75}/>
                <Tooltip showTitle={false}/>
                <Axis visible={false}/>
                <Legend/>
                <Legend name='industry' visible={false}/>
                <Interval
                    position="exposure"
                    adjust="stack"
                    color="industry"
                    style={{
                        lineWidth: 1,
                        stroke: '#fff',
                    }}
                    label={['exposure', {
                        content: (data) => {
                            return `${data.industry}: ${data.exposure}%`;
                        },
                    }]}
                />
            </Chart>
        </>
    );
};

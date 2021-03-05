import React, {useCallback, useContext, useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {Instruments as InstrumentsData} from "../graphql/__generated__/Instruments";
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import {Axis, Chart, Coordinate, Interval, Legend, Tooltip} from 'bizcharts';
import {Typeahead} from 'react-bootstrap-typeahead';
import "./Demo.scss"
import {
    DeleteInstrument as DeleteInstrumentData,
    DeleteInstrumentVariables
} from "../graphql/__generated__/DeleteInstrument";
import {ADD_INSTRUMENT, DELETE_INSTRUMENT, GET_INSTRUMENTS} from "../graphql/portfolioInstruments";
import {getEtfIndustries} from "../actions/etfIndustriesAction";
import {Store} from "../contexts/Store";
import {getEtfSymbols} from "../actions/etfSymbolsAction";

const AddInstrument = () => {
    const [addInstrument] = useMutation(ADD_INSTRUMENT);
    const {state, dispatch} = useContext(Store);
    const [selected, setSelected] = useState([]);

    const handleSubmit = useCallback(async () => {
        await addInstrument({
            variables: {ticker: selected.toString()}
        })
    }, [addInstrument, selected]);

    useEffect(() => {
        getEtfSymbols(dispatch)
    }, [dispatch]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <Typeahead
                        id="basic-example"
                        onChange={(selected) => {
                            setSelected(selected)
                        }}
                        options={state.etfSymbols.map((symbol: any) => symbol.symbol)}
                        placeholder="ETF symbol"
                        selected={selected}
                    />
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-secondary">Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
        </>
    );
}

const InstrumentsList = () => {
    const {dispatch} = useContext(Store);
    const {data, loading, error, refetch} = useQuery<InstrumentsData>(GET_INSTRUMENTS);

    const [
        deleteInstrument,
        {loading: deleteInstrumentLoading, error: deleteInstrumentError}
    ] = useMutation<DeleteInstrumentData, DeleteInstrumentVariables>(DELETE_INSTRUMENT);

    const instruments = data ? data.instruments : null;

    const handleDeleteInstrument = useCallback(async (id: string) => {
        await deleteInstrument({variables: {id}})
        await refetch();
    }, [deleteInstrument, refetch]);

    const instrumentsList = instruments ? (
        instruments.map((instrument) => {
            return (
                <ListGroup.Item
                    className="hover"
                    onClick={() => getEtfIndustries(instrument.ticker, dispatch)}
                    key={instrument.id}>{instrument.ticker}
                    <Button onClick={() => handleDeleteInstrument(instrument.id)}>Delete</Button>
                </ListGroup.Item>
            )
        })
    ) : null;

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Uh oh! Something went wrong - please try again later :(</h2>;
    }

    const deleteInstrumentLoadingMessage = deleteInstrumentLoading ? (
        <h4>Deletion in progress...</h4>
    ) : null;

    const deleteInstrumentErrorMessage = deleteInstrumentError ? (
        <h4>
            Uh oh! Something went wrong with deleting :(. Please try again soon.
        </h4>
    ) : null;

    return (
        <div className="instruments">
            {instrumentsList}
            {deleteInstrumentLoadingMessage}
            {deleteInstrumentErrorMessage}
        </div>
    );
};

const EtfIndustriesChart = () => {
    const {state} = useContext(Store);

    const chartCols = {
        percent: {
            formatter: (val: any) => {
                val = val * 100 + '%';
                return val;
            },
        },
    };

    return (
        <Chart height={400} scale={chartCols} data={state.sectorExposure} autoFit>
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
    )
}

export const Demo = () => {
    return (
        <>
            <AddInstrument/>
            <ListGroup>
                <InstrumentsList/>
            </ListGroup>
            <EtfIndustriesChart/>
        </>
    )
}
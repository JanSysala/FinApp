import React, {useCallback, useState} from "react";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {Instruments as InstrumentsData} from "../graphql/PortfolioInstruments/__generated__/Instruments";
import {
    DeleteInstrument as DeleteInstrumentData,
    DeleteInstrumentVariables
} from "../graphql/PortfolioInstruments/__generated__/DeleteInstrument";
import {ADD_INSTRUMENT, DELETE_INSTRUMENT, INSTRUMENTS} from "../graphql/PortfolioInstruments";

export const AddInstrument = () => {
    const [addInstrument] = useMutation(ADD_INSTRUMENT);
    const [userInput, setUserInput] = useState({ticker: ''})

    const handleSubmit = useCallback(async () => {
        await addInstrument({
            variables: {ticker: userInput.ticker}
        })
    }, [addInstrument, userInput.ticker]);

    const updateField = (e: any) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="ticker"
                    value={userInput.ticker}
                    onChange={updateField}
                />
                <button type="submit">Add Instrument</button>
            </form>
        </>
    );
}

export const InstrumentsList = () => {
    const {data, loading, error, refetch} = useQuery<InstrumentsData>(INSTRUMENTS);

    const [
        deleteInstrument,
        {loading: deleteInstrumentLoading, error: deleteInstrumentError}
    ] = useMutation<DeleteInstrumentData, DeleteInstrumentVariables>(DELETE_INSTRUMENT);

    const instruments = data ? data.instruments : null;

    const handleDeleteInstrument = useCallback(async (id: string) => {
        await deleteInstrument({variables: {id}})
        refetch();
    }, [deleteInstrument, refetch]);

    const instrumentsList = instruments ? (
        instruments.map((instrument) => {
            return (
                <li key={instrument.id}>{instrument.ticker}
                    <button onClick={() => handleDeleteInstrument(instrument.id)}>Delete</button>
                </li>
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

export const Instruments = () => {
    return (
        <div>
            <AddInstrument/>
            <InstrumentsList/>
        </div>
    )

}
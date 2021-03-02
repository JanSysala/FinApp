import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from "@apollo/react-hooks";
import {ApolloClient, InMemoryCache} from '@apollo/client';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import {MenuNavbar} from "./components/MenuNavbar";
import {StoreProvider} from "./contexts/Store";

const client = new ApolloClient({
    uri: "http://localhost:9000/api",
    cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <ApolloProvider client={client}>
                <MenuNavbar/>
                <App/>
            </ApolloProvider>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

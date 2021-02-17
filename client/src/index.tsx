import React from "react";
import {render} from "react-dom";
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApolloProvider} from "@apollo/react-hooks";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./store/reducers/rootReducer";
import rootSaga from "./store/sagas/rootSaga";
import {Home} from "./components/Home";

const client = new ApolloClient({
    uri: "http://localhost:9000/api",
    cache: new InMemoryCache()
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    );
};

render(
    <Provider store={store}>
        <React.StrictMode>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

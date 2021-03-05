import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from "./components/Home";
import {Demo} from "./components/Demo";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/demo" component={Demo}/>
            </Switch>
        </Router>
    );
}
export default App;

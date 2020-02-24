import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Orders from "./pages/Orders/Orders";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/operations/production-house'} component={Orders}/>
                <Route component={Orders}/>
            </Switch>
        </Router>
    );
}

export default App;

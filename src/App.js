import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Orders from "./pages/Orders/Orders";
import Order from "./pages/Order/Order";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/operations/production-house'} component={Orders}/>
                <Route path={'/operation/:operationId'} component={Order}/>
            </Switch>
        </Router>
    );
}

export default App;

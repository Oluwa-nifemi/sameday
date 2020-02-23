import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AllProducts from "./pages/AllProducts";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/operations/production-house'} component={AllProducts}/>
                <Route component={AllProducts}/>
            </Switch>
        </Router>
    );
}

export default App;

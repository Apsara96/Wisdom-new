import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
    Route,
    Switch,
    HashRouter
} from "react-router-dom";

import './assets/scss/style.scss';

// pages for this product
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import AboutUs from "./views/AboutUs/aboutus.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/custom-components">
                <CustomComponents />
            </Route>
            <Route path="/">
                <Components />
            </Route>
            <Route path="/about-us">
                <AboutUs/>
            </Route>
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);

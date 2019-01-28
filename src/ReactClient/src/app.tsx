import * as path from "path";
// import Counter from "./components/Counter";
// import FetchData from "./components/FetchData";
import {exact} from "prop-types";
import * as React from "react";
import {Route} from "react-router";
import {Home} from "./components/Home";
import {Layout} from "./components/Layout";

export default () => (
    <Layout>
        <Route exact path="/" component={Home}/>
        {/*<Route path="/counter" component={Counter}/>*/}
        {/*<Route path="/fetchdata/:startDateIndex?" component={FetchData}/>*/}
    </Layout>
);

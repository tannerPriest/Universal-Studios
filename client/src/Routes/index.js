import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import {
    Landing, Login,
} from "../Pages";

const Routes = (props) => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={Landing}
            />
            <Route
                exact
                path="/login"
                component={Login}
            />
        </Switch>
    )
}

export default Routes

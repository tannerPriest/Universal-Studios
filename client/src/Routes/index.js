import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import {
    Landing,
} from "../Pages";

const Routes = (props) => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={Landing}
            />
        </Switch>
    )
}

export default Routes

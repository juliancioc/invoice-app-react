import React from "react"
import { Switch } from "react-router-dom"

import ViewInvoice from "../pages/ViewInvoice"
import Home from "../pages/Home"
import Route from "./Route"
import NewInvoice from "../pages/NewInvoice"

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/invoice/:id" component={ViewInvoice} />
    <Route path="/new-invoice" component={NewInvoice} />
  </Switch>
)

export default Routes

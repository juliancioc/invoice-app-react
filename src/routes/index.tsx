import React from 'react'
import { Switch } from 'react-router-dom'

import ViewInvoice from '../pages/ViewInvoice'
import Home from '../pages/Home'
import Route from './Route'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/invoice/:id" exact component={ViewInvoice} />
  </Switch>
)

export default Routes

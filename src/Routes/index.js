import React from 'react';
import Dashboard from '../Components/Dashboard'
import Authentication from '../Components/Auth'
import Error from '../Components/Error/'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path="/Authentication" component={Authentication} />
            <Route component={Error} />
        </Switch>
    </BrowserRouter>

);

export default Routes;
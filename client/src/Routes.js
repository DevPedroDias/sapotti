import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import { PrivateRoute } from './PrivateRoute.js'

import Login from './components/login/Login'
// import Home from './pages/home'
// import Users from './pages/users'
// import Products from './pages/products'
// import PageNotFound from './pages/404'

export default class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    {/* <PrivateRoute path="/home" exact component={Home} />
                    <PrivateRoute path="/usuarios" exact component={Users} />
                    <PrivateRoute path="/produtos" exact component={Products} />
                    <Route component={PageNotFound} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}
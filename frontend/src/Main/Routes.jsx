import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import UserCrud from '../Components/User/UserCrud'
import App from './App'

export default props =>
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>
import React from 'react'
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import TradesTable from './components/trades_table';
import LogForm from './components/log_form'

export default (
    <Route path="/" component={App}>
      <IndexRoute component={TradesTable} />
      <Route path="/new" component={LogForm} />
    </Route>
)

import { Route, Router, browserHistory } from 'react-router';
import React from 'react';

import Home from '../components/Home';
import TextList from '../components/TextList';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="login" component={TextList} />
    </Route>
  </Router>
);

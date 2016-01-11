import { Route, Router, browserHistory } from 'react-router';
import React from 'react';

import Home from '../components/Home';
import TextList from '../components/TextList';
import CommentsBox from '../components/CommentsBox';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="test" component={TextList} />
      <Route path="comments" component={CommentsBox} />
    </Route>
  </Router>
);

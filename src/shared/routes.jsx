import { Route } from 'react-router';
import React from 'react';

import TextList from '../components/TextList';

export default (
  <Route component = {TextList}>
    <Route path='/' component={TextList} />
  </Route>
);

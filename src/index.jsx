import React from 'react';
import ReactDOM from 'react-dom'
import Router from 'react-router';
import routes from './shared/routes.jsx';

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  ReactDOM.render(<Handler />, document.getElementById('app'));
});

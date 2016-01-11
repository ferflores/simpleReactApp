import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router';
import routes from './shared/routes';
import { render } from 'react-dom'


render(routes, document.getElementById('app'))

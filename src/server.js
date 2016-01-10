import express from 'express';
import morgan from 'morgan';
import { renderToString } from 'react-dom/server';
import Router, { match, RouterContext } from 'react-router';
import React from 'react';
import TextList from './components/TextList';

var app = express();

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.set('views',__dirname + '/../src/views');
app.set('view engine', 'jade');

import routes from './shared/routes';

app.listen('3000', () => {
  console.log('server listening on 3000...')
});

/*render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.body)*/

/*app.get('/*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(React.createElement(Handler));
    res.render('index', { content: content });
  });
});*/
//Router.render()

app.get('/*', (req, res) => {
  console.log('get in');
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    console.log('match in');
    if (error) {
        console.log('error in');
          res.status(500).send(error.message)
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          console.log(renderProps);
          // You can also check renderProps.components or renderProps.routes for
          // your "not found" component or route respectively, and send a 404 as
          // below, if you're using a catch-all route.
          let content = React.renderToString(React.createElement(renderProps));
          res.render('index', {content:'jojoejoejeo'})
          //res.status(200).send('fdf');
          //res.status(200).send(renderToString(<RouterContext {...renderProps} />))
        } else {
          res.status(404).send('Not found')
        }
      })
    });

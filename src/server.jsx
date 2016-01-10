import express from 'express';
import morgan from 'morgan';
import React from 'react';
import Home from './components/Home';
import ReactDomServer from 'react-dom/server';

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.set('views',__dirname + '/../src/views');
app.set('view engine', 'jade');

app.listen('3000', () => {
  console.log('server listening on 3000...')
});

app.get('/*', (req, res) => {
  let content = ReactDomServer.renderToString(< Home />);
  res.render('index', {content: content});
});

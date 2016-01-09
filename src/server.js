import express from 'express';
import morgan from 'morgan';

var app = express();

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));

app.listen('3000', () => {
  console.log('server listening on 3000...')
});

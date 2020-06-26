import express from 'express';
import * as homeController from '../controllers/homeController';
import * as bodyParser from 'body-parser';
import {errorHandler} from '../middleware/Errors';
import {Request, Response, NextFunction} from 'express';
import {requestLogger} from '../middleware/RequestHandler';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(requestLogger);

app.get('/', homeController.getIndex);
app.post('/', homeController.postIndex);
app.get('/react',homeController.getReact);

app.use((err : Error, req : Request, res : Response, next : NextFunction) => {
  errorHandler(err, res);
});

app.listen(process.env.PORT, function() {
  console.log('App listening on port : ' + process.env.PORT);
});

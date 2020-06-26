import express from 'express';
import * as homeController from './controllers/home';
import * as bodyParser from 'body-parser';
import {Request, Response, NextFunction} from 'express';
import {requestLoggingMiddleware,errorLoggingMiddleware} from './libs/helper';


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(requestLoggingMiddleware);

app.get('/', homeController.getIndex);
app.post('/issue', homeController.postIssue);
app.get('/issue/:issueId/state/:state', homeController.getUpdateIssueState);

app.use((err : any, req : Request, res : Response, next : NextFunction) => {
  errorLoggingMiddleware(err);
  res.send(err);
});

app.listen(process.env.PORT, function() {
  console.log('App listening on port : ' + process.env.PORT);
});

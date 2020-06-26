import express from 'express';
import * as homeController from '../controllers/homeController';
import * as bodyParser from 'body-parser';
import {Request, Response, NextFunction} from 'express';
import {requestLogger} from '../middleware/RequestHandler';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(requestLogger);

app.get('/', homeController.getIndex);
app.post('/issue', homeController.postIssue);
app.get('/issue/:issueId/state/:state', homeController.getUpdateIssueState);

app.use((err : any, req : Request, res : Response, next : NextFunction) => {
  res.send(err);
});

app.listen(process.env.PORT, function() {
  console.log('App listening on port : ' + process.env.PORT);
});

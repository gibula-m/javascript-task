import {Issue} from '../types/issue';
import {IssueType} from './enums';
import {HttpError} from '../errors/httpError';
import {NextFunction, Request, Response} from 'express';

export const stateValidator = (old : Issue, bid : Issue) => {
  if (old.state == IssueType.CLOSED) {
    throw new HttpError(400, 'Cannot change closed issue state!');
  }
  if (old.state == IssueType.PENDING && bid.state == IssueType.OPEN) {
    throw new HttpError(400, 'Cannot open pending issue!');
  }
};

export const errorLoggingMiddleware = (err : Error) => {
  const item = {
    level : 'ERROR',
    time : Date.now(),
    msg : err.message,
    pid : process.pid
  };
  console.log(JSON.stringify(item));
};


export const requestLoggingMiddleware = (req : Request, res : Response, next : NextFunction) => {
  const item = {
    level : 'TRACE',
    time : Date.now(),
    msg : 'Request '+ req.method + ' to route : ' + req.path,
    pid : process.pid
  };
  console.log(JSON.stringify(item));
  next();
};

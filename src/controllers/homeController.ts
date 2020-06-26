import {Request, Response, NextFunction} from 'express';
import {Issue} from '../types/Issue';
import * as IssuesRepository from '../libs/Mongo';
import {IssueType} from '../libs/Enums';
import {HttpError} from '../errors/HttpError';
import {render} from '../front/render';
import {getMainComponent} from '../front/node';

export const getIndex = async (req : Request, res : Response) => {
  const list = await IssuesRepository.getAllIssues();
  res.send(render(getMainComponent(list.reverse())));
};

export const postIssue = async (req : Request, res : Response) => {
  const issue : Issue = req.body;
  if (!issue._id) {
    if (!issue.title || !issue.description) {
      throw new HttpError(400, 'Received data are incomplete!');
    }
    try {
      issue.state = IssueType.OPEN;
      await IssuesRepository.addIssue(issue);
    } catch (error) {
      throw new HttpError(500, 'Cannot store issue!');
    }
  } else {
    await IssuesRepository.updateIssue(issue);
  }
  res.redirect('/');
};

export const getUpdateIssueState = async (req : Request, res : Response, next : NextFunction) => {
  const issueUpdate : Issue = {
    _id: req.params.issueId,
    state: parseInt(req.params.state),
  };
  try {
    await IssuesRepository.updateIssue(issueUpdate);
  } catch (error) {
    next(error);
  }


  res.redirect('/');
};

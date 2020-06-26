import {Request, Response} from 'express';
import {Issue} from '../types/Issue';
import * as IssuesRepository from '../libs/Mongo';
import {ResponseDTO} from '../types/Response';
import {IssueType} from '../libs/Enums';
import {HttpError} from '../errors/HttpError';
import {render} from '../front/render';
import {getMainComponent} from '../front/node';

export const getIndex = async (req : Request, res : Response) => {
  const list = await IssuesRepository.getAllIssues();

  const response : ResponseDTO = {
    status: 200,
    data: list,
  };
  res.status(response.status).json(response);
};

export const postIndex = async (req : Request, res : Response) => {
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

  const response : ResponseDTO = {
    status: 200,
    data: {},
  };
  res.status(response.status).json(response);
};

export const getReact = (req : Request, res : Response) => {
  res.send(render(getMainComponent()));
}

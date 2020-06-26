import {Issue} from '../types/Issue';
import {IssueType} from './Enums';
import {HttpError} from '../errors/HttpError';

export const stateValidator = (old : Issue, bid : Issue) => {
  if (old.state == IssueType.CLOSED) {
    throw new HttpError(500, 'Cannot change closed issue state!');
  }
  if (old.state == IssueType.PENDING && bid.state == IssueType.OPEN) {
    throw new HttpError(500, 'Cannot open pending issue!');
  }
};

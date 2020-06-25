import {Issue} from '../types/Issue';
import {IssueType} from './Enums';
import {HttpError} from '../errors/HttpError';

export const stateValidator = (old : Issue, bid : Issue) => {
  if(old.state == IssueType.CLOSED) {
    throw new HttpError(400,'Cannot change closed issue state!')
  }
  if(old.state == IssueType.PENDING && bid.state == IssueType.OPEN) {
    console.log("Here")
    throw new HttpError(400,'Pending issue cannot be opened again!')
  }
}

import * as mongo from 'mongodb';
import {Issue} from '../types/Issue';
import {HttpError} from '../errors/HttpError';

const dbURL = 'mongodb://localhost:27017';

export const addIssue = async (issue : Issue) => {
  try {
    const connection = await mongo.connect(dbURL);
    const dbObject = connection.db('issueTracker');
    return (await dbObject.collection('issue').insertOne(issue)).insertedId;
  } catch (error) {
    throw new HttpError(500, 'Cannot store issue!');
  }
};

export const getAllIssues = async () : Promise<Array<Issue>> => {
  try {
    const connection = await mongo.connect(dbURL);
    const dbObject = connection.db('issueTracker');
    return dbObject.collection('issue').find({}).toArray();
  } catch (error) {
    throw new HttpError(500, 'Data receiving err!');
  }
};

export const updateIssue = async (issue : Issue) => {
  try {
    const connection = await mongo.connect(dbURL);
    const dbObject = connection.db('issueTracker');

    const updated = JSON.parse(JSON.stringify(issue, (k, v) => v ?? undefined));
    delete updated._id;

    return dbObject.collection('issue').updateOne({_id: new mongo.ObjectID(issue._id)}, {$set: updated});
  } catch (error) {
    throw new HttpError(500, 'Cannot update issue!');
  }
};

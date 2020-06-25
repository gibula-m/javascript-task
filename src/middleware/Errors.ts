import {Response} from 'express';

export const errorHandler = (err : any, res : Response) => {
  res.status(err.statusCode).json(err);
};

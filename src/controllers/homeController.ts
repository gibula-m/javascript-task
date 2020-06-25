import {Request, Response} from 'express';
import {ResponseWrapper} from '../types/Response';
import {HttpError} from '../errors/HttpError';

export const getIndex = async (req : Request, res : Response)=>{
  res.status(200).end();
};

export const postIndex = (req : Request, res : Response) => {
  res.send("POST Method");
};

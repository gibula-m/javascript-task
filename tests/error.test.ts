import {HttpError} from '../src/errors/httpError';

describe('Classes tests', () => {
  const err = new HttpError(500, 'Internal error');

  it('HttpError class', () => {
    expect(err.statusCode).toBe(500);
    expect(err.message).toBe('Internal error');
  });
});

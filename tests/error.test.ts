import {HttpError} from '../src/errors/httpError';

describe('Classes tests', () => {
  const err = new HttpError(500, 'Internal error');

  it('HttpError class', async () => {
    expect(err.statusCode).toBe(500);
    expect(err.message).toBe('Internal error');
  });
});

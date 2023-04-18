import { Request, Response } from 'express';
import User from '../src/model/userModel';
import userServices from '../src/services/userServices';
import { IUserSchema } from '../src/interface/interface';

jest.mock('../src/model/userModel');

describe('test on operations user', () => {
  const mockResponse = (): Response => {
    const res = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };
  const mockLogin = User.login as jest.MockedFunction<typeof User.login>;

  beforeEach(() => {
    mockLogin.mockClear();
  });

  it('should failed on register a user', async () => {
    const email = 'test@example.com';
    const password = 'password';
    const req = { body: { email, password } } as Request;
    const res = mockResponse();

    const user: IUserSchema = {
      _id: '1234',
      email: 'test23@example.com',
      password: '$2b$10$z6pybLO6yLth9mjKrr6LaOQ6utP3WywT/2g1lzBhCJ79S67N4fY9S',
    };

    mockLogin.mockReturnValueOnce(user);

    await userServices.register(req, res);

    expect(res.status).toHaveBeenCalledWith(406);
    expect(res.json).toHaveBeenCalledWith({
      status: 'failed',
      errors: expect.any(Object),
    });
  });
});

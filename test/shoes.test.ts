import shoesServices from '../src/services/shoesServices';
import { Response, Request } from 'express';

describe('test on get shoes', () => {
  const shoe = {
    id: expect.any(Number),
    name: expect.any(String),
    price: expect.any(String),
    image: expect.any(String),
    description: expect.any(String),
    discount: expect.any(Number),
    endprice: expect.any(String),
    company: expect.any(String),
    gender: expect.any(String),
    type: expect.any(String),
  };

  const pagination = {
    prev: expect.any(Object),
    next: expect.any(Object),
  };

  const mockRequest = (query: any): Request => {
    return { query } as Request;
  };

  const mockResponse = (): Response => {
    const res = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  it('should return a list of shoes', async () => {
    const req = mockRequest({ sort: 'price' });
    const res = mockResponse();
    await shoesServices.getShoes(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 'ok',
        total_shoes: expect.any(Number),
        pagination: expect.objectContaining(pagination),
        data: expect.arrayContaining([shoe]),
      })
    );
  });

  it('should return a single shoe', async () => {
    const req = {
      params: {
        shoeId: 1,
      },
      query: {
        recommendation: false,
      },
    } as unknown as Request;
    const res = mockResponse();

    await shoesServices.getSingleShoe(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 'Ok',
        total_shoes: 1,
        data: expect.any(Array),
        recommendations: expect.arrayContaining([]),
      })
    );
  });

  it('should return a single shoe with recommendations', async () => {
    const req = {
      params: {
        shoeId: 1,
      },
      query: {
        recommendation: true,
      },
    } as unknown as Request;
    const res = mockResponse();

    await shoesServices.getSingleShoe(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 'Ok',
        total_shoes: 1,
        data: expect.any(Array),
        recommendations: expect.arrayContaining([]),
      })
    );
  });

  it('should return a list of shoes by men', async () => {
    const req = {} as Request;
    const res = mockResponse();

    await shoesServices.getShoesByMen(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 'OK',
        total_shoes: expect.any(Number),
        data: expect.arrayContaining([shoe]),
      })
    );
  });

  it('should return a list of shoes by women', async () => {
    const req = {} as Request;
    const res = mockResponse();

    await shoesServices.getShoesByMen(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 'OK',
        total_shoes: expect.any(Number),
        data: expect.arrayContaining([shoe]),
      })
    );
  });
});

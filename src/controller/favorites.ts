import { Response } from 'express';
import { IRequestWithUser } from '../interface/interface';
import featured from '../helpers/featured';
const { REQUEST_TYPE_STATUS_CODE } = featured();

export const getFavorites = async (req: IRequestWithUser, res: Response) => {
  const user_id = req.user?._id;
  console.log(user_id);
  try {
    res.send('created');
  } catch (err) {
    res.send('created');
  }
};

export const createFavorite = async (req: IRequestWithUser, res: Response) => {
  const requiredFields = ['id', 'name', 'image', 'company'];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', missingFields });
  }

  const { id, name, image, company } = req.body;

  try {
    const user_id = req.user?._id;
    res.status(REQUEST_TYPE_STATUS_CODE.created).json({ status: 'Created' });
  } catch (err) {
    res.status(REQUEST_TYPE_STATUS_CODE.serverError).json();
  }
};

export const deleteFavorite = async (req: IRequestWithUser, res: Response) => {
  const id = req.query.id;

  if (!id) {
    return res.status(REQUEST_TYPE_STATUS_CODE.notFound).json({ status: 'failed', error: 'Please id is required' });
  }

  try {
    res.status(REQUEST_TYPE_STATUS_CODE.ok).json();
  } catch (err) {
    res.status(REQUEST_TYPE_STATUS_CODE.notFound).json();
  }
};

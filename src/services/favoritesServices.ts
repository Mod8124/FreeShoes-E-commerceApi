import { Response } from 'express';
import featured from '../helpers/featured';
import { MyRequest } from '../Middleware/requireUser';
const { REQUEST_TYPE_STATUS_CODE } = featured();
import Favorite from '../model/favoriteModel';

const getFavorites = async (req: MyRequest, res: Response) => {
  try {
    const user_id = req.user?._id;
    const favorites = await Favorite.findOne({ user_id });
    if (!favorites) {
      return res
        .status(REQUEST_TYPE_STATUS_CODE.ok)
        .json({ status: 'ok', total_favorites: 0, data: { id: '', favorites: [] } });
    }
    res.status(REQUEST_TYPE_STATUS_CODE.ok).json({
      status: 'OK',
      total_favorites: favorites.favorites.length,
      data: { id: favorites._id, favorites: favorites.favorites },
    });
  } catch (err) {
    res.status(REQUEST_TYPE_STATUS_CODE.notFound).json({ status: 'failed', Error, err });
  }
};

const addFavorites = async (req: MyRequest, res: Response) => {
  const requiredFields = ['id', 'name', 'image', 'company'];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res
      .status(REQUEST_TYPE_STATUS_CODE.serverError)
      .json({ error: 'Please fill in all the fields', missingFields });
  }

  try {
    const { id, name, image, company } = req.body;
    const user_id = req.user?._id;
    const favorites = await Favorite.findOne({ user_id });

    if (favorites) {
      const updatedFavorites = await Favorite.findOneAndUpdate(
        { user_id },
        { $push: { favorites: { id, name, image, company } } },
        { new: true, upsert: true }
      );

      res.status(REQUEST_TYPE_STATUS_CODE.created).json({
        status: 'ok',
        total_favorites: updatedFavorites.favorites.length,
        data: { id: updatedFavorites._id, favorites: updatedFavorites.favorites },
      });
    } else {
      const newFavorite = await Favorite.create({
        user_id,
        favorites: [{ id, name, image, company }],
      });

      res.status(REQUEST_TYPE_STATUS_CODE.created).json({
        status: 'ok',
        total_favorites: newFavorite.favorites.length,
        data: { id: newFavorite._id, favorites: newFavorite.favorites },
      });
    }
  } catch (err) {
    res.status(REQUEST_TYPE_STATUS_CODE.notFound).json({ status: 'failed', Error, err });
  }
};

const deleteFavorite = async (req: MyRequest, res: Response) => {
  const id = req.body.id;
  const favoriteId = req.body.favoriteId;

  try {
    const updatedFavorites = await Favorite.findOneAndUpdate(
      { _id: id },
      { $pull: { favorites: { _id: favoriteId } } },
      { new: true }
    );

    console.log(updatedFavorites);

    if (!updatedFavorites) {
      return res.status(REQUEST_TYPE_STATUS_CODE.notFound).json({ status: 'failed', error: 'Favorite not found' });
    }

    res.status(REQUEST_TYPE_STATUS_CODE.ok).json({
      status: 'ok',
      total_favorites: updatedFavorites.favorites.length,
      data: { id: updatedFavorites._id, favorites: updatedFavorites.favorites },
    });
  } catch (err) {
    res.status(REQUEST_TYPE_STATUS_CODE.notFound).json({ status: 'failed', Error, err });
  }
};

export default {
  addFavorites,
  getFavorites,
  deleteFavorite,
};

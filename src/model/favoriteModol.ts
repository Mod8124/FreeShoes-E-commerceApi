import mongoose, { model } from 'mongoose';
const schema = mongoose.Schema;
import { IFavoriteSchema, FavoriteModel } from '../interface/interface';

const favoritesSchema = new schema<IFavoriteSchema, FavoriteModel>({
  user: {
    type: String,
    required: [true, 'user is required'],
    unique: true,
  },
  favorites: {
    type: [{ id: Number, name: String, image: String, company: String }],
    required: false,
  },
});

const Favorite = model<IFavoriteSchema, FavoriteModel>('Favorite', favoritesSchema);

export default Favorite;

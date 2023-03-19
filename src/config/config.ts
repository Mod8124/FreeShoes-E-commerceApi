import { config } from 'dotenv';

config();
const DB_URL = process.env.DB_URL;
const JWT_KEY = process.env.JWT_KEY || 'secretJWT';

export default {
  DB_URL,
  JWT_KEY,
};

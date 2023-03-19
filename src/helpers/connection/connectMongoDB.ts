import mongoose from 'mongoose';
import config from '../../config/config';

const ConnectMongoDb = async () => {
  try {
    const data = await await mongoose.connect(`${config.DB_URL}`);
    console.log(`connection to database successful : ${data.connection.name}`);
  } catch (err) {
    console.log(err);
  }
};

export default ConnectMongoDb;

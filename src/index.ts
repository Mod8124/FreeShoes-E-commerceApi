import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import shoesRouter from './router/shoes';
import userRouter from './router/user';
import { default as V1SwaggerDocs } from './helpers/swagger';
import ConnectMongoDb from './helpers/connection/connectMongoDB';
import favoritesRouter from './router/favorites';

const app: Express = express();
const PORT = process.env.PORT || 3000;

//set up
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/v1/shoes', shoesRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/favorites', favoritesRouter);

// swagger docs
V1SwaggerDocs(app, PORT);

//redirect all routes
app.use((req, res) => res.redirect('/api/v1/docs'));

//server on
app.listen(PORT, () => {
  ConnectMongoDb();
  console.log('server on', `http://localhost:${PORT}/api/v1/shoes`);
});

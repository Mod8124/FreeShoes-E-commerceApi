import express, { Request, Response, Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routerShoes from './router/shoes';
import routerAuth from './router/auth';
import { default as V1SwaggerDocs } from './helpers/swagger';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/api/v1/shoes', routerShoes);
app.use('/api/v1/auth', routerAuth);
// swagger docs
V1SwaggerDocs(app, PORT);

//redirect all routes
app.use((req, res) => res.redirect('/api/v1/docs'));

//server on
app.listen(PORT, () => console.log('server on', `http://localhost:${PORT}/api/v1/shoes`));

import express, { Request, Response, Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routerShoes from './router/shoes';
import routerAuth from './router/auth';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/shoes', routerShoes);
app.use('/auth', routerAuth);

const templateMsg = (msg: string) => `<h1>${msg}</h1>`;

app.get('/', (req: Request, res: Response) => {
  res.send(
    templateMsg(
      'What up bro here don\'t check the,\n <a href="https://github.com/Mod8124/ecomerce-node.git">documention'
    )
  );
});

app.use((req, res) =>
  res
    .status(404)
    .send(
      templateMsg(
        'Error <span style="color:red;">404</span> page dont\'t found'
      )
    )
);

app.listen(PORT, () => console.log('server on', `localhost:${PORT}`));

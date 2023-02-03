import express, { Request, Response, Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router/router';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));

app.use('/v1/shoes', router);

app.get('/', (req: Request, res: Response) => {
  res.send(
    '<div style="text-align:center; width:100%;"><h1>What up bro here don\'t check the,\n <a href="https://github.com/Mod8124/ecomerce-node.git">documention</a></h1></div>'
  );
});

app.use((req, res) =>
  res
    .status(404)
    .send(
      '<h1>Error <span style="color:red;">404</span> page dont\'t found</h1>'
    )
);

app.listen(PORT, () => console.log('server on'));

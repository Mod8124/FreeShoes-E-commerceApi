import { Router } from 'express';
const shoesRouter = Router();
import { index, getByWomen, getByMen, detail } from '../controller/shoes';

shoesRouter.get('/', index);
shoesRouter.get('/women', getByWomen);
shoesRouter.get('/men', getByMen);
shoesRouter.get('/:shoeName', detail);

export default shoesRouter;

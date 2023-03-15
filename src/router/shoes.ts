import { Router } from 'express';
const router = Router();
import { index, getByWomen, getByMen, detail } from '../controller/shoes';

router.get('/', index);
router.get('/women', getByWomen);
router.get('/men', getByMen);
router.get('/:shoeName', detail);

export default router;

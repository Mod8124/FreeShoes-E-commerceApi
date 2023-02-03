import { Router } from "express";
const router = Router();
import { index, getByWomen, getByMen, detail } from '../controller/controller';

router.get('/shoes', index);
router.get('/women', getByWomen);
router.get('/men', getByMen);
router.get('/shoe/:id', detail);

export default router;
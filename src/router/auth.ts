import { Router } from 'express';
const router = Router();

router.get('/login', (req, res) => {
  res.send('hello login');
});

router.get('/sign', (req, res) => {
  res.send('hello sign');
});

export default router;

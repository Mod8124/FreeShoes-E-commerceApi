import { Router } from 'express';
const userRouter = Router();
import { signUp, logIn, logout } from '../controller/user';
import { requireAuth } from '../Middleware/requireUser';

userRouter.use(requireAuth);

userRouter.post('/login', logIn);
userRouter.post('/signup', signUp);
userRouter.get('/logout', logout);

export default userRouter;

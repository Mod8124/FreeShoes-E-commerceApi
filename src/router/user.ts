import { Router } from 'express';
const userRouter = Router();
import { signUp, logIn } from '../controller/user';

userRouter.post('/login', logIn);
userRouter.post('/signup', signUp);

export default userRouter;

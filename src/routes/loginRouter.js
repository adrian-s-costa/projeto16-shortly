import { Router } from 'express';
import { postSignUp,  postSignIn} from '../controllers/loginController.js';
import { signUpValidate } from '../middlewares/signUpValidator.js';

const router = Router();

router.post("/signin", postSignIn);
router.post("/signup", signUpValidate, postSignUp);

export default router;
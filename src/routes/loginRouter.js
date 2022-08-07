import { Router } from 'express';
import { postSignUp,  postSignIn} from '../controllers/loginController.js';
import { signUpValidate } from '../middlewares/signUpValidator.js';
import { signInValidate } from '../middlewares/signInValidator.js';

const router = Router();

router.post("https://back-shortly-api-a.herokuapp.com/signup", signUpValidate, postSignUp);
router.post("https://back-shortly-api-a.herokuapp.com/signin", signInValidate, postSignIn);

export default router;
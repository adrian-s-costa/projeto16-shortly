import { Router } from 'express';
import jwtValidation from '../middlewares/jwtValidator.js'
import getMyUser from '../controllers/userController.js';

const router = Router();

router.get("https://back-shortly-api-a.herokuapp.com/users/me", jwtValidation, getMyUser);

export default router;
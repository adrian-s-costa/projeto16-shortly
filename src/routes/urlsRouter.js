import { Router } from 'express';
import postUrl from '../controllers/urlController.js';
import jwtValidation from '../middlewares/jwtValidator.js'
import { urlValidate } from '../middlewares/urlValidator.js';

const router = Router();

router.post("/urls/shorten", urlValidate, jwtValidation, postUrl);

export default router;
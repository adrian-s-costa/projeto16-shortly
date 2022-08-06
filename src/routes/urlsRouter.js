import { Router } from 'express';
import jwtValidation from '../middlewares/jwtValidator.js'
import { urlValidate } from '../middlewares/urlValidator.js';
import { getUrl, postUrl } from '../controllers/urlController.js';


const router = Router();

router.post("/urls/shorten", urlValidate, jwtValidation, postUrl);
router.get("/urls/:id", getUrl);

export default router;
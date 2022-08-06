import { Router } from 'express';
import jwtValidation from '../middlewares/jwtValidator.js'
import { urlValidate } from '../middlewares/urlValidator.js';
import deleteValidate from '../middlewares/deleteValidator.js';
import { getUrl, postUrl, openShortUrl, deleteUrl } from '../controllers/urlController.js';

const router = Router();

router.post("/urls/shorten", urlValidate, jwtValidation, postUrl);
router.get("/urls/:id", getUrl);
router.get("/urls/open/:shortUrl", openShortUrl)
router.delete("/urls/:id", jwtValidation, deleteValidate, deleteUrl)

export default router;
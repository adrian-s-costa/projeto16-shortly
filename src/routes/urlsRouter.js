import { Router } from 'express';
import jwtValidation from '../middlewares/jwtValidator.js'
import { urlValidate } from '../middlewares/urlValidator.js';
import deleteValidate from '../middlewares/deleteValidator.js';
import { getUrl, postUrl, openShortUrl, deleteUrl } from '../controllers/urlController.js';

const router = Router();

router.post("https://back-shortly-api-a.herokuapp.com/urls/shorten", urlValidate, jwtValidation, postUrl);
router.get("https://back-shortly-api-a.herokuapp.com/urls/:id", getUrl);
router.get("https://back-shortly-api-a.herokuapp.com/urls/open/:shortUrl", openShortUrl);
router.delete("https://back-shortly-api-a.herokuapp.com/urls/:id", jwtValidation, deleteValidate, deleteUrl);

export default router;
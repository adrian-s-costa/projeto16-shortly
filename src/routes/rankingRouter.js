import { Router } from 'express';
import getRanking from '../controllers/rankingController.js';

const router = Router();

router.get("https://back-shortly-api-a.herokuapp.com/ranking", getRanking);

export default router;
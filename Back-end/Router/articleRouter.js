// RoleRoute.js
import {
    addArticle, 
    getAllArticles,
     getOneArticles, 
     updateArticle,
      deleteArticle
} from '../Controller/articleController.js';
import { Router } from 'express';

const router = Router();

router.post('/article',addArticle);
router.get('/article',getAllArticles);
router.get('/article/:id', getOneArticles);
router.patch('/article/:id', updateArticle);
router.delete('/article/:id',deleteArticle);

export default router;


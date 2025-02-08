import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreatePostController } from './controllers/post/CreatePostController';

import uploadConfig from './config/multer';
import { ListByCategoryController } from './controllers/post/ListByCategoryController';
import { DeletePostController } from './controllers/post/DeletePostController';
import { ListPostController } from './controllers/post/ListPostController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas de usuário
router.post('/users', upload.single('file'), new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

//Rotas de categorias
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

//Rotas de postagens
router.post('/post', isAuthenticated, upload.single('file'), new CreatePostController().handle);
router.get('/category/post', isAuthenticated, new ListByCategoryController().handle);
router.delete('/post/', isAuthenticated, new DeletePostController().handle);
router.get('/posts', isAuthenticated, new ListPostController().handle);

export default router;


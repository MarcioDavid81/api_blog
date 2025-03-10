import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailUserController } from './controllers/user/DetailUserController';
import { ListUserController } from './controllers/user/ListUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreatePostController } from './controllers/post/CreatePostController';

import uploadConfig from './config/multer';
import { ListByCategoryController } from './controllers/post/ListByCategoryController';
import { DeletePostController } from './controllers/post/DeletePostController';
import { ListPostController } from './controllers/post/ListPostController';
import { UpdatePostController } from './controllers/post/UpdatePostController';
import { UpdateCategoryController } from './controllers/category/UpdateCategoryController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas de usuário
router.post('/users', upload.single('file'), new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.get('/users', isAuthenticated, new ListUserController().handle);

//Rotas de categorias
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);
router.put('/category', isAuthenticated, new UpdateCategoryController().handle);
router.delete('/category', isAuthenticated, new DeleteCategoryController().handle);

//Rotas de postagens
router.post('/post', isAuthenticated, upload.single('file'), new CreatePostController().handle);
router.get('/category/post', new ListByCategoryController().handle);
router.delete('/post/', isAuthenticated, new DeletePostController().handle);
router.get('/posts', new ListPostController().handle);
router.put('/post', isAuthenticated, new UpdatePostController().handle);

export default router;


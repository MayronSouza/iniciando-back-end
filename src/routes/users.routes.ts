import { Router } from 'express';
import multer from 'multer';

import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return res.status(201).json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    try {
      const userUpdateAvatar = new UpdateUserAvatarService();

      const user = await userUpdateAvatar.execute({
        user_id: req.user.id,
        avatarFilename: req.file.filename,
      });

      delete user.password;

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
);

export default usersRouter;

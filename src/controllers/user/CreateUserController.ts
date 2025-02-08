import { Request, response, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    } else {
      const { originalname, filename: image } = req.file;

      const user = await createUserService.execute({
        name,
        email,
        password,
        image,
      });

      return res.json(user);
    }
  }
}

export { CreateUserController };

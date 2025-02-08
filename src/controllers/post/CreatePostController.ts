import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
  async handle(req: Request, res: Response) {
    const { title, subtitle, content, date, author_id, category_id } = req.body;

    const createPostService = new CreatePostService();

    if(!req.file) {
        return res.status(400).json({ error: "Banner is required" });
    } else {
        const { originalname, filename: banner } = req.file;

        const post = await createPostService.execute({
            title,
            subtitle,
            content,
            date,
            banner,
            author_id,
            category_id,
          });
          return res.json(post);
    }
  }
}

export { CreatePostController };

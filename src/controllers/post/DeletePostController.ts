import { Request, Response } from "express";
import { DeletePostService } from "../../services/post/DeletePostService";

class DeletePostController {
  async handle(req: Request, res: Response) {
    const post_id = req.query.post_id as string;

    const deletePostService = new DeletePostService();

    const post = await deletePostService.execute({ post_id });

    return res.json(post);
  }
}

export { DeletePostController };

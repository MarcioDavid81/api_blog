import { Request, Response } from "express";
import { UpdatePostService } from "../../services/post/UpdatePostService";

class UpdatePostController {
  async handle(req: Request, res: Response) {
    const { post_id, title, subtitle, content } = req.body;

    const updatePostService = new UpdatePostService();

        const updatedPost = await updatePostService.execute({
            post_id: post_id,
            title: title,
            subtitle: subtitle,
            content: content,
          });
          return res.json(updatedPost);

  }
}

export { UpdatePostController };
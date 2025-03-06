import { Request, Response } from "express";
import { UpdatePostService } from "../../services/post/UpdatePostService";

class UpdatePostController {
  async handle(req: Request, res: Response) {
    const { title, subtitle, content } = req.body;

    const post_id = req.query.post_id as string;

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
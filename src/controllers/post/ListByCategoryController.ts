import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/post/ListByCategoryService";

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const listByCategoryService = new ListByCategoryService();

        const posts = await listByCategoryService.execute({ category_id });

        return res.json(posts);
    }
}

export { ListByCategoryController };
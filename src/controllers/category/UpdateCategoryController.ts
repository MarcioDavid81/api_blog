import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";

class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const { category_id, name } = req.body;

    const updateCategoryService = new UpdateCategoryService();

    const updatedCategory = await updateCategoryService.execute({
      category_id,
      name,
    });

    return res.json(updatedCategory);
  }
}

export { UpdateCategoryController };

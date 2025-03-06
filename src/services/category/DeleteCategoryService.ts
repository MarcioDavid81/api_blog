import prismaClient from "../../prisma";

interface DeleteCategory {
    category_id: string;
}

class DeleteCategoryService {
  async execute({ category_id }: DeleteCategory) {
    const category = await prismaClient.category.delete({
      where: {
        id: category_id,
      },
    });
    return category;
  }
}

export { DeleteCategoryService };
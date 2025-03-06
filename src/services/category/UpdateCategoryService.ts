import prismaClient from "../../prisma";

interface UpdateCategoryRequest {
    category_id: string;
    name: string;
}

class UpdateCategoryService {
    async execute({ category_id, name }: UpdateCategoryRequest) {
        const category = await prismaClient.category.update({
            where: {
                id: category_id,
            },
            data: {
                name: name,
            },
        });

        return category;
    }
}

export { UpdateCategoryService }
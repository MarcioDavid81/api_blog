import prismaClient from "../../prisma";

interface PostRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({ category_id }: PostRequest) {
        const posts = await prismaClient.post.findMany({
            where: {
                categoryId: category_id
            }
        });

        return posts;
    }
}

export { ListByCategoryService };
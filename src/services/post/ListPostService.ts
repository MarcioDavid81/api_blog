import prismaClient from "../../prisma";

class ListPostService {
    async execute() {
        const posts = await prismaClient.post.findMany();

        return posts;
    }
}

export { ListPostService };
import prismaClient from "../../prisma";

class ListPostService {
    async execute() {
        const posts = await prismaClient.post.findMany({
            include: {
                author: {
                    select: {
                        name: true
                    }
                },
                category: {
                    select: {
                        name: true
                    }
                }
            }
        });

        return posts;
    }
}

export { ListPostService };
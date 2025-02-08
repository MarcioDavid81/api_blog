import prismaClient from "../../prisma";

interface PostRequest {
    title: string;
    subtitle: string;
    content: string;
    banner: string;
    date: string;
    author_id: string;
    category_id: string;
}

class CreatePostService {
    async execute({ title, subtitle, content, banner, date, author_id, category_id }: PostRequest) {
        const post = await prismaClient.post.create({
            data: {
                title: title,
                subtitle: subtitle,
                content: content,
                banner: banner,
                date: new Date(date),
                authorId: author_id,
                categoryId: category_id
            }
        });

        return post;
    }
}

export { CreatePostService };
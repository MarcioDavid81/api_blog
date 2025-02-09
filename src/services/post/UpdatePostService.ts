import prismaClient from "../../prisma";

interface UpdatePostRequest {
  post_id: string;
  title: string;
  subtitle: string;
  content: string;
}

class UpdatePostService {
  async execute({ post_id, title, subtitle, content }: UpdatePostRequest) {
    const post = await prismaClient.post.update({
      where: {
        id: post_id,
      },
      data: {
        title: title,
        subtitle: subtitle,
        content: content,
      },
    });

    return post;
  }
}

export { UpdatePostService };
import prismaClient from "../../prisma";

interface DeletePost {
    post_id: string;
}

class DeletePostService {
  async execute({ post_id }: DeletePost) {
   const post = await prismaClient.post.delete({
      where: {
        id: post_id,
      },
    });
    return post;
  }
}

export { DeletePostService };
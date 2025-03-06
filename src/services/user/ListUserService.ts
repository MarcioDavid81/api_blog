import prismaClient from "../../prisma";

class ListUserService {
  async execute() {
    const users = await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    return users;
  }
}

export { ListUserService };
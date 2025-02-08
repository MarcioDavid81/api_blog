import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
    image: string;
}

class CreateUserService  {
    async execute({ name, email, password, image }: UserRequest) {
        //Verifica se o usuário passou um nome e um email
        if(!name) {
            throw new Error("Name incorrect");
        }
        
        if(!email) {
            throw new Error("Email incorrect");
        }

        //Verifica se o email já existe no db
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        //Cria um hash para a senha
        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                image: image
            },
            select: {
                id: true,
                name: true,
                email: true,
                image: true
            }
        });

        return user;
    }
}

export { CreateUserService };
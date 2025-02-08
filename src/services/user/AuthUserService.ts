import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({email, password}: AuthRequest) {
        // Verificar se email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        // Se não existir, retornar erro
        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        // Se existir, verificar se senha está correta
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gerar token JWT (json web token) e devolver os dados do usuário como id, name, email, avatar
        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.SECRET_JWT,
            {
                subject: user.id,
                expiresIn: "30d"
            }
        );


        return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            token: token
        }
    }
}

export { AuthUserService }
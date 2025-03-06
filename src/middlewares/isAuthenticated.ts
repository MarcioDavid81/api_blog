import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
        //Receber o token
        const authToken = req.headers.authorization;

        //Validar se o token está preenchido
        if (!authToken) {
            return res.status(401).end();
        }
    
        const [, token] = authToken.split(" ");
    
        try {
            //Validar o token
            const { sub } = verify(
                token,
                process.env.SECRET_JWT
            ) as Payload;
    
            //Recuperar o id do usuário e colocar dentro da variável user_id dentro do req, deve ser injetado a tipagem do express @types/express e descomentar o "@typeRoots": ["./src/@types"] no tsconfig.json
            req.user_id = sub;
    
            return next();
    
            //Em caso de erro
        } catch (err) {
            return res.status(401).end();
        }
}
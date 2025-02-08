import crypto from "crypto";
import multer from "multer";
import { extname, resolve } from "path";

export default {
    upload(folder: string){
        return {
        storage: multer.diskStorage({
            //destino dos arquivos ".." para descer as pastas
            destination: resolve(__dirname, "..", "..", folder),
            filename: (req, file, callback) => {
                const fileHash = crypto.randomBytes(16).toString("hex");
                const fileName = `${fileHash}-${file.originalname}`;

                return callback(null, fileName);
            }
        })
    }

    }
}

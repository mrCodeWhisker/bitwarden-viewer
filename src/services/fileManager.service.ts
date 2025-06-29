import fs from "node:fs/promises";

class FileManagerService {
    static async uploadFile(file: File) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        await fs.writeFile(`./public/uploads/${file.name}`, buffer);
    }
}

export default FileManagerService
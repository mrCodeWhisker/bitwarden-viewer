import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import fs from "node:fs/promises";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const file = formData.get("file") as File;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        await fs.writeFile(`./public/uploads/${file.name}`, buffer);

        revalidatePath("/");

        return NextResponse.json({ status: "success" });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ status: "fail", error: e })
    }
}
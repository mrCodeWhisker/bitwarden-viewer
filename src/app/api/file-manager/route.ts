import FileManagerService from "@/services/fileManager.service";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const file = formData.get("file") as File;
        FileManagerService.uploadFile(file);

        revalidatePath("/");

        return NextResponse.json({ status: "success" });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ status: "fail", error: e })
    }
}
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    console.log(id);
    let result = await prisma.service.findMany({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}

import { getAuth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const auth = getAuth(req);
  const currentUserId = auth.userId ?? undefined;

  const tasks = await prisma.task.findMany({
    where: { userId: { equals: currentUserId } },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json(tasks);
}

import { NextResponse } from "next/server";
import { prisma } from "~/utils/prisma";

// Create a chat for the room id in route room/[id]/chat
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await request.json();

  const newChat = await prisma.chat.create({
    data: {
      roomId: Number(params.id),
      userId: String(res.userId),
      message: String(res.message),
    },
  });

  return NextResponse.json(newChat);
}

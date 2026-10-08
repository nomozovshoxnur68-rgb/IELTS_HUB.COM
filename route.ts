import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";

// foydalanuvchi topilmasa ham bcrypt ishlashi uchun (vaqt orqali email aniqlanmasin)
const DUMMY_HASH = bcrypt.hashSync("dummy-password", 12);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = String(body?.email ?? "").trim().toLowerCase();
  const password = String(body?.password ?? "");

  if (!email || !password) {
    return NextResponse.json({ message: "Email va parolni kiriting" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  const ok = await bcrypt.compare(password, user?.passwordHash ?? DUMMY_HASH);

  if (!user || !ok) {
    return NextResponse.json({ message: "Email yoki parol noto'g'ri" }, { status: 401 });
  }

  await createSession(user.id);
  return NextResponse.json({ user: { id: user.id, email: user.email } });
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  const SCRIPT_URL = process.env.NEXT_PUBLIC_SCRIPT_URL!; // put your URL in .env

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const resultText = await res.text();
    return NextResponse.json({ status: "success", response: resultText });
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}

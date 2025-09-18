import { NextResponse } from "next/server";

// Define error type
interface FetchError extends Error {
  status?: number;
  statusText?: string;
}

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  const SCRIPT_URL = process.env.NEXT_PUBLIC_SCRIPT_URL!;

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const resultText = await res.text();
    return NextResponse.json({ status: "success", response: resultText });
  } catch (error: unknown) {
    const fetchError = error as FetchError;
    return NextResponse.json(
      { status: "error", message: fetchError.message },
      { status: 500 }
    );
  }
}

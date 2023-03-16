import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log(request.headers, "request.headers");
  console.log(request.body, "request.body");

  return NextResponse.json({ hello: "Next.js - contact" });
}

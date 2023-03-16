import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(req, res, authOptions);
  const Bearer = req.headers.authorization;

  if (session || Bearer === process.env.N8N_TOKEN) {
    try {
      //res.status(200).json({ message: "Hello from protected route!" });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Hello from protected route!" }));
      //    res.end();
      return;
    } catch (error) {
      res.status(404).json({ error: "Error While Fetching Rossum Token" });
    }
  } else {
    // Not Signed in
    return res.status(401).json({ error: "User not Authenticated" });
  }
}

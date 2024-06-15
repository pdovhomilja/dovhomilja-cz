import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prismadb";

interface CustomError extends Error {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  //console.log(session, "session");

  if (session) {
    try {
      const { title, content, authorEmail } = req.body;

      const result = await prisma.post.create({
        data: {
          title: title,
          content: content,
          author: { connect: { email: authorEmail } },
        },
      });

      return res.status(201).json(result);
    } catch (error) {
      const customError = error as CustomError;
      return res
        .status(500)
        .json({ error: customError.message || "An unknown error occurred" });
    }
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}

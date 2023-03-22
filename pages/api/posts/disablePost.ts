import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const drafts = await prisma.post.update({
    where: {
      id: req.body.id,
    },
    data: {
      published: false,
    },
  });

  return res.status(200).json(drafts);
}

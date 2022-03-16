import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: { ...user },
          create: {
            name: "Anonymus",
            ...user,
          },
        },
      },
    },
  });
  return res.json({ ok: true, token: token.payload });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });

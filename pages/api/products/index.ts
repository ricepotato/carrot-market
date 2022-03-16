import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { name, price, description },
    session: { user },
  } = req;
  console.log(user);
  const product = await client.product.create({
    data: {
      name,
      price: +price,
      description,
      image: "image",
      user: {
        connect: { id: user?.id },
      },
    },
  });

  res.json({ ok: true, product });
}

export default withApiSession(withHandler({ method: "POST", handler }));

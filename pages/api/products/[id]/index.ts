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
    query: { id },
    session: { user },
  } = req;

  const product = await client.product.findUnique({
    where: { id: +id.toString() },
    include: {
      user: {
        select: { id: true, name: true },
      },
    },
  });
  const terms = product?.name
    .split(" ")
    .map((word) => ({ name: { contains: word } }));

  const relatedProducts = await client.product.findMany({
    where: { OR: terms, AND: { id: { not: product?.id } } },
  });
  const isLiked = Boolean(
    await client.fav.findFirst({
      where: {
        productId: product?.id,
        userId: user?.id,
      },
    })
  );
  res.json({ ok: true, product, isLiked, relatedProducts });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));

import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;

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
  console.log(relatedProducts);
  res.json({ ok: true, product, relatedProducts });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));

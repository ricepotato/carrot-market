import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  //res.status(200).end();
  return res.json({ ok: true });
  //res.json({ ok: true, data: "xx" });
}

export default withHandler("POST", handler);

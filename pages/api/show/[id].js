import nextConnect from "next-connect";
import dbConnect from "../../../lib/db";
import { getShowById } from "../../../controller/show";

const handler = nextConnect();

dbConnect();

handler.get(getShowById);

export default handler;

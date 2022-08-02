import nextConnect from "next-connect";
import dbConnect from "../../../lib/db";
import { createShow, getAllShows } from "../../../controller/show";

const handler = nextConnect();

dbConnect();

handler.post(createShow);
handler.get(getAllShows);

export default handler;

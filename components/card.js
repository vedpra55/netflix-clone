import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Card({ imgUrl, id }) {
  return (
    <div>
      <Link href={`/browse/${id}`}>
        <div className="cursor-pointer relative w-56 h-96">
          <Image
            className="rounded-md"
            src={imgUrl}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </Link>
    </div>
  );
}

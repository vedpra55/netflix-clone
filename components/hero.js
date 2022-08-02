import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-[35rem]">
      <Image
        priority
        objectFit="cover"
        layout="fill"
        className="w-full h-full object-cover bg-center"
        src="/static/banner.jpg"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute top-32 inset-0 h-full w-full">
        <div className="container mx-auto px-10 flex flex-col gap-y-5">
          <div className="flex items-center gap-x-1">
            <p className="text-red-600 text-6xl">N</p>
            <span className="text-xs text-white/50">S E R I E S</span>
          </div>
          <h2 className="text-white/90 text-4xl w-72  leading-[3rem]">
            Stranger Things Season 4
          </h2>
          <p className="text-white/75 text-xl w-56">
            Who is the real mudrer of all time see it.
          </p>
          <div>
            <Link href={"browse/62e927253e906e84ea2db3dd"} passHref>
              <button className="flex cursor-pointer bg-white rounded-md px-6 py-2 items-center gap-x-2">
                <img src="/static/play.svg" width="24px" height="24px" />
                <p>Play</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

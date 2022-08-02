import { useState } from "react";

export default function VideoCard({ name, description, show, video }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {!play && <div className=" absolute inset-0 bg-black/50"></div>}
      <iframe
        className="w-screen h-[35rem]"
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {!play && (
        <div className="absolute top-40 px-5 lg:px-20 flex flex-col gap-y-5">
          <p className="text-white text-4xl">{name}</p>
          <p className="text-white/80 w-56">{description}</p>
          <div>
            <button
              onClick={() => setPlay(!play)}
              className="bg-white px-5 flex py-2 gap-x-2 items-center rounded-md"
            >
              <img className="w-8 h-8" src="/static/play.svg" />
              <p>Play</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

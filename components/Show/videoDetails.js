export default function VideoDetails({
  starCast,
  totalEpisode,
  totalHour,
  about,
  producer,
}) {
  return (
    <div className="px-10 lg:container lg:mx-auto lg:px-5 mt-10 mb-10">
      <div className="flex lg:gap-x-10 flex-wrap">
        <div className="flex flex-col gap-2 lg:gap-5 w-56 border-l-red-600 lg:border-l-0  border-l-2 lg:border-r-red-600 p-2 lg:border-r-2">
          <h3 className="text-white text-2xl">Star Cast</h3>
          <p className="text-white/80">{starCast}</p>
        </div>
        <div className="flex flex-col gap-5 w-56 border-l-red-600  border-l-2 lg:border-l-0 lg:border-r-red-600 p-2 lg:border-r-2">
          <h3 className="text-white text-2xl">Details</h3>
          <div className="flex flex-col gap-y-1">
            <p className="text-white/80">Total Episode : {totalEpisode}</p>
            <p className="text-white/80">Duration: {totalHour}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-56 border-l-red-600  border-l-2 lg:border-l-0 lg:border-r-red-600 p-2 lg:border-r-2">
          <h3 className="text-white text-2xl">About Show</h3>
          <div className="flex flex-col gap-y-1">
            <p className="text-white/80">{about}</p>
          </div>
        </div>
        <div className="flex flex-col  gap-5 w-56 border-l-red-600 border-l-2 lg:border-l-0 lg:border-r-red-600 p-2 lg:border-r-2">
          <h3 className="text-white text-2xl">Producer</h3>
          <div className="flex flex-col gap-y-1">
            <p className="text-white/80">Direction: {producer[0].direction}</p>
            <p className="text-white/80">Concept: {producer[1].producer}</p>
            <p className="text-white/80">Art & Vfx: {producer[2].artvfx}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

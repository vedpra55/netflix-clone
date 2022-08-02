import Navbar from "../../components/navbar";
import { useAuthContext } from "../../context/userContext";
import VideoCard from "../../components/Show/videoCard";
import VideoDetails from "../../components/Show/videoDetails";

import { Show } from "../../models/showModel";

import dbConnect from "../../lib/db";

export default function ShowDetail({ allshows }) {
  const show = JSON.parse(allshows);

  const { email } = useAuthContext();

  return (
    <div>
      <Navbar email={email} />
      <VideoCard
        name={show[0].name}
        video={show[0].video}
        description={show[0].description}
      />
      <VideoDetails
        starCast={show[0].starCast}
        totalEpisode={show[0].details[0].totalSeason}
        totalHour={show[0].details[0].totalDuration}
        about={show[0].aboutShow}
        producer={show[0].aboutProducer}
      />
    </div>
  );
}

export async function getStaticPaths() {
  dbConnect();

  let allshows = await Show.find({});

  allshows = JSON.stringify(allshows);
  allshows = JSON.parse(allshows);

  const paths = allshows.map((item) => {
    return {
      params: { id: item._id },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  dbConnect();

  const allshows = await Show.find({ _id: params.id });

  return {
    props: { allshows: JSON.stringify(allshows) },
  };
}

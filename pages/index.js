import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { useAuthContext } from "../context/userContext";
import { Show } from "../models/showModel";
import Db from "../lib/db";

import Card from "../components/card";

export default function Home({ allShows }) {
  const { email, handleLogOutBtn } = useAuthContext();
  const shows = JSON.parse(allShows);
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Navbar email={email} handleLogOut={handleLogOutBtn} />
        <p className="text-4xl text-white my-10 container mx-auto px-5">
          Latest
        </p>

        <div className="flex mb-10 gap-5 px-5 container mx-auto overflow-x-scroll scrollbar-hide scroll-smooth">
          {shows.map((show, i) => (
            <Card key={i} imgUrl={show.image[0].small} id={show._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  Db();
  const allShow = await Show.find({});

  return {
    props: { allShows: JSON.stringify(allShow) },
  };
}
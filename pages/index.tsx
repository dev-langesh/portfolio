import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className=" w-screen h-screen ">
      <Head>
        <title>langesh</title>
      </Head>
      <div className="w-16 h-40 bg-gradient-to-br from-sky-400 to to-blue-600  absolute top-0 left-0"></div>
      <div className="w-16 h-40 bg-gradient-to-br from-pink-600 to to-pink-500/75  absolute bottom-0 right-0"></div>
      <div className="absolute top-0 w-full h-full z-30 backdrop-blur-3xl p-6 overflow-auto">
        <header className="flex flex-col items-center space-y-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-slab font-semibold text-gray-800">
            Hey there, Good Morning
          </h1>
          <span className="h-1 rounded-xl w-24 inline-block bg-gradient-to-br from-sky-400 to to-blue-600 "></span>
        </header>
        <section className="pt-14">
          <p className="text-lg text-gray-800 ">
            This is
            <span className="text-4xl font-cursive px-2"> Langesh </span>
            from India,
            <p className="text-xl">I&apos;m a</p>
            <div className="text-4xl font-slab font-semibold py-2 bg-gradient-to-r from-blue-500 to to-sky-400 text-transparent bg-clip-text">
              Full Stack Developer
            </div>
          </p>
        </section>
        <section className="flex flex-col md:flex-row md:justify-between md:w-11/12 ">
          <p className="md:w-[500px] py-6 pr-4 md:pr-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            animi dolor nemo nihil eaque cupiditate fugiat corporis quia commodi
            quis ratione cum voluptatum sed officiis esse, repellat doloribus.
            Vel, vero!
          </p>
          <img
            className="w-72 h-80 aspect-square object-cover mx-auto md:mx-0"
            src="/images/langesh.jpg"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default Home;

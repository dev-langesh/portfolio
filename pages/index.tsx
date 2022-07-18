import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className=" w-screen h-screen ">
      <div className="w-16 h-40 bg-gradient-to-br from-sky-400 to to-blue-600  absolute top-0 left-0"></div>
      <div className="w-16 h-40 bg-gradient-to-br from-pink-600 to to-pink-300  absolute bottom-0 right-0"></div>
      <div className="absolute top-0 w-full h-full z-30 backdrop-blur-3xl p-10">
        <header className="flex flex-col items-center space-y-3">
          <h1 className="text-2xl md:text-3xl text-center font-slab font-semibold text-gray-700">
            Hey there, Good Morning
          </h1>
          <span className="h-1 rounded-xl w-24 inline-block bg-gradient-to-br from-sky-400 to to-blue-600 "></span>
        </header>
      </div>
    </div>
  );
};

export default Home;

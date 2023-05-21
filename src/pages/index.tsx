import { Inter } from "next/font/google";
import Link from "next/link";
import HomeLayout from "@/components/HomeLayout";
import HomeHero from "@/components/HomeHero";
import Head from "next/head";


const Home: React.FC = () => {
  return (
    <HomeLayout>
      <Head>
        <title>우리아이의 유치원</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto md:flex-row">
          <HomeHero />
        </div>
      </section>
    </HomeLayout>
  );
}

export default Home;

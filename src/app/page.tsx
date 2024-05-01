import Header from "@/components/header";
import Latest from "@/components/latest";
import MainChart from "@/components/mainchart";
import Sidebar from "@/components/sidebar";
import TopCards from "@/components/topcards";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>macrovue</title>
        <meta name="description" content="macrovue" />
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <link rel='icon' href="/favicon.ico"/>
      </Head>
      <main className="bg-secondary min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <MainChart /> 
          <Latest /> 
        </div>
        </main>
    </>
  );
}

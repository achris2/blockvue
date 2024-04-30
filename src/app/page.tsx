import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
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
      <main className="bg-slate-100 min-h-screen">
        <Header />
        </main>
    </>
  );
}

"use client"

import Header from "@/components/header";
import Latest from "@/components/latest";
import MainChart from "@/components/mainchart";
import TopCards from "@/components/topcards";
import { fetchCryptoPrices } from "@/services/api";
import Head from "next/head";
import { useEffect, useState } from "react";
import { CryptoAsset } from  "@/services/api";

export default function Home() {
  const [cryptoData, setCryptoData] = useState<CryptoAsset[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCryptoPrices();
        setCryptoData(data);
      } catch (error) {
        console.error("Failed to fetch crypto data:", error);
        setError("Failed to fetch crypto data");
      }
    };
    fetchData();
  }, []); 

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
        <TopCards cryptoData={cryptoData} />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <MainChart /> 
          <Latest /> 
        </div>
        </main>
    </>
  );
}

"use client"

import Header from "@/components/header";
import MainChart from "@/components/mainchart";
import TopCards from "@/components/topcards";
import { fetchCryptoPrices, CryptoAsset, ApiResponse} from "@/services/api";
import Head from "next/head";
import { useEffect, useState } from "react";
import TopCrypto from "@/components/topten";

export default function Home() {
  const [cryptoData, setCryptoData] = useState<CryptoAsset[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCryptoPrices();
        console.log("Data received in parent component Page.tsx", response.data[0]); 
        setCryptoData(response.data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch crypto data:", error);
        setError("Failed to fetch crypto data");
        setCryptoData(null);
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
        <div className="p-4 grid md:grid-cols-2 grid-cols-1 gap-5">
          <MainChart /> 
          <TopCrypto cryptoData={cryptoData} /> 
        </div>
        </main>
    </>
  );
}

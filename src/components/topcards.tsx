"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { DollarSign } from "lucide-react"; 
import { CryptoAsset } from "@/services/api";

interface TopCardsProps {
  cryptoData: CryptoAsset[] | null;
}

export default function TopCards({ cryptoData }: TopCardsProps) {
  console.log("CryptoData received in TopCards.tsx", cryptoData);
  
  if (!cryptoData) {
    console.log("cryptoData is still null or undefined"); 
    return <div>Loading...</div>;  
  }; 


  // Filter for specific cryptocurrencies
  const filteredData = cryptoData.filter(asset =>
    asset.symbol === 'BTC' || asset.symbol === 'ETH' || asset.symbol === 'SOL'
  );

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4 lg:justify-between">
    {filteredData.map((asset) => (
      <Card key={asset.name}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{asset.name}</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${parseFloat(asset.priceUsd).toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">{asset.changePercent24Hr}% from last 24hr</p>
        </CardContent>
      </Card>
    ))}
  </div>
  ); 
}

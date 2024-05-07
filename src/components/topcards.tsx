"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { DollarSign } from "lucide-react"; 
import { ChildrenProps } from "@/services/api";


export default function TopCards({ cryptoData }: ChildrenProps) {
  console.log("CryptoData received in TopCards.tsx", cryptoData);

  if (!cryptoData) {
    console.log("CryptoData is still null or undefined"); 
    return <div>Loading...</div>;  
  }; 


  // Filter for specific cryptocurrencies
  const filteredData = cryptoData.filter(asset =>
    asset.symbol === 'BTC' || asset.symbol === 'ETH' || asset.symbol === 'BNB'|| asset.symbol === 'SOL'
  );

  return (
    <div className="grid lg:grid-cols-4 py-5 px-5 gap-4 p-4 lg:justify-between">
    {filteredData.map((asset) => (
      <Card key={asset.name} className="min-h-10">
        <CardHeader className="flex flex-row items-center justify-between space-y-2 gap-4 pb-2">
          <CardTitle className="text-sm font-medium">{asset.name}</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${parseFloat(asset.priceUsd).toFixed(0)}</div>
          <p className="text-xs text-muted-foreground">{parseFloat(asset.changePercent24Hr).toFixed(2)}% from last 24hr</p>
        </CardContent>
      </Card>
    ))}
  </div>
  ); 
}

"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { DollarSign } from "lucide-react"; 
import { useEffect, useState } from "react";

export default function TopCards() {
  // const [copperPrices, setCopperPrices] = useState(null);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const prices = await fetchCommodityPrices("Copper");
  //             setCopperPrices(prices); // Update state with the fetched prices
  //         } catch (error) {
  //             console.error("Failed to fetch copper prices:", error);
  //             setError("Failed to fetch copper prices");
  //         }
  //     };
  //     fetchData();
  // }, []);

  
  //   if (error) {
  //     return <div>Error: {error}</div>; // Display error if any
  // }

    return (
      <div className="grid lg:grid-cols-5 gap-4 p-4 lg:justify-between">
                    {/* {copperPrices && (
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{copperPrices.name}</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${copperPrices.price}</div>
                        <p className="text-xs text-muted-foreground">Updated at {new Date(copperPrices.updated * 1000).toLocaleString()}</p>
                    </CardContent>
                </Card>
            )} */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">${}</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
                </Card>
        </div>
  )
}

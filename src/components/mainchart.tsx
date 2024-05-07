"use client"

import { HistoryPoint, fetchBitcoinHistory } from '@/services/api';
import { Bitcoin } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts'

export default function MainChart() {
    const [btcData, setBtcData] = useState<HistoryPoint[] | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetchBitcoinHistory();
            console.log("btc history received in mainchart.tsx", response.data); 
            const transformedData = response.data.map((point) => ({
                time: point.time, // maintain the 'time' property as it is required by HistoryPoint
                priceUsd: point.priceUsd, // ensure property names match; case sensitivity matters
                // If you need to use 'date' for display, consider adding it as an additional property
                date: new Date(point.time).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })
              }));
            setBtcData(transformedData);
            setError(null);
        } catch (error) {
          console.error("Failed to fetch btc history data:", error);
          setError("Failed to fetch btc history data");
          setBtcData(null);
        }
      };
      fetchData();
    }, []); 

    console.log("btcData state:", btcData); 


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!btcData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-secondary">
                        <div className="flex justify-between gap-2 text-slate-900 pb-2">
                <h3 className="text-primary text-md ">Bitcoin Price</h3>
                <Bitcoin className='h-4 w-4'/>
            </div>
            <ResponsiveContainer width={"100%"} height={"50%"}>
                <LineChart data={btcData} margin={{ top: 0, left: -15, right: 0, bottom: 0}}>

                <Line type='monotone' dataKey="priceUsd" stroke="#2563eb" width={25} strokeWidth={1}/>

                <XAxis 
                    dataKey="date"
                    tickLine={false}
                    axisLine={true}
                    stroke='#2563eb'
                    fontSize={9}
                    padding={{ left: 0, right: 0}}
                />
                <YAxis 
                    dataKey="priceUsd"
                    tickLine={false}
                    axisLine={true}
                    stroke='#2563eb'
                    fontSize={9}
                    padding={{ top: 0, bottom: 0}}
                />
                <CartesianGrid strokeDasharray="2 2" className='opacity-50'/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

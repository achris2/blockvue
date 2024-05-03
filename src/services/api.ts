"use server"

import { gzip } from "zlib";

// // Ninja API commodity prices 
// interface CommodityPrices {
//     exchange: string;
//     name: string;
//     price: number;
//     updated: string;
// };

// const ninjaApiKey = process.env.NINJA_API_KEY; 

// export async function fetchCommodityPrices(name: string): Promise<CommodityPrices> { 
//     if (!ninjaApiKey) {
//         throw new Error("Missing Ninja API key");
//     }
//     const url = `https://api.api-ninjas.com/v1/commodityprice?name=${encodeURIComponent(name)}`;

//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'X-Api-Key': ninjaApiKey,
//                 'Content-Type': 'application/json',
//             }
//         });
//         if (!response.ok) {
//             console.error(`API Error: ${response.status} ${response.statusText}`);
//             throw new Error(`HTTP status ${response.status}`);
//         }
//         const data = await response.json();

//         return data;
        
//     } catch (error) {
//         console.error("Error fetching commodity prices:", error);
//         throw error;
//     }
// }


// CoinCap API 
export interface CryptoAsset {
    rank: number,
    symbol: string,
    name: string, 
    supply: number, 
    maxSupply: number,  
    marketCapUsd: number, 
    volumeUsd24Hr: number, 
    priceUsd: number, 
    changePercent24Hr: number,
    vwap24Hr: number, 
    
};


export async function fetchCryptoPrices(ids?: string[], search?: string, limit?: number, offset?: number): Promise<CryptoAsset> { 

    // initialising cryptoData array 
    let cryptoData = []; 

    // CoinCap api URL - assets API endpoint
    let url = `https://api.coincap.io/v2/assets`;

    // build query based on params 
    const queryParams = new URLSearchParams(); 

    if (search) queryParams.append('search', search);
    if (ids) queryParams.append('ids', ids.join(','));
    if (limit) queryParams.append('limit', limit.toString());
    if (offset) queryParams.append('offset', offset.toString());

    // append query strings if any params provided 
    if (queryParams.toString()) url += `?${queryParams}`; 


    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept-Encoding': 'gzip', 
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            throw new Error(`HTTP status ${response.status}`);
        }
        const data = await response.json();

        return data.data; 

        cryptoData.push(data.data);
        
    } catch (error) {
        console.error("Error fetching crypto prices:", error);
        throw error;
    }
}
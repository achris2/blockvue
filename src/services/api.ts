"use server"

// Ninja API commodity prices 
interface CommodityPrices {
    exchange: string;
    name: string;
    price: number;
    updated: string;
};

const apiKey = process.env.NINJA_API_KEY; 

export async function fetchCommodityPrices(name: string): Promise<CommodityPrices> { 
    if (!apiKey) {
        throw new Error("Missing Ninja API key");
    }
    const url = `https://api.api-ninjas.com/v1/commodityprice?name=${encodeURIComponent(name)}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            throw new Error(`HTTP status ${response.status}`);
        }
        const data = await response.json();

        return data;
        
    } catch (error) {
        console.error("Error fetching commodity prices:", error);
        throw error;
    }
}


export async function fetchCryptoPrices(name: string): Promise<CommodityPrices> { 
    if (!apiKey) {
        throw new Error("Missing Ninja API key");
    }
    const url = `https://api.api-ninjas.com/v1/commodityprice?name=${encodeURIComponent(name)}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            throw new Error(`HTTP status ${response.status}`);
        }
        const data = await response.json();

        return data;
        
    } catch (error) {
        console.error("Error fetching commodity prices:", error);
        throw error;
    }
}
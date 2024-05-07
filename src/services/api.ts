"use server"


// CoinCap API 
export interface CryptoAsset {
    rank: string,
    symbol: string,
    name: string, 
    supply: string, 
    maxSupply: string,  
    marketCapUsd: string, 
    volumeUsd24Hr: string, 
    priceUsd: string, 
    changePercent24Hr: string,
    vwap24Hr: string, 
    
};

export interface ApiResponse {
    data: CryptoAsset[]; // The array of CryptoAssets is wrapped in a "data" object
  }

export async function fetchCryptoPrices(ids?: string[], search?: string, limit?: string, offset?: string): Promise<ApiResponse> { 

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
        
        const data = await response.json();
        console.log("API response in api.ts", data[0]);
        return data;  
        
    } catch (error) {
        console.error("Error fetching crypto prices:", error);
        throw error;
    }
}; 
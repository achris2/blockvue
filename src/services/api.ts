"use server"
  
export interface HistoryPoint {
    priceUsd: string; 
    time: number;  // UNIX timestamp
    date: string;  // ISO date string
}

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

export interface ChildrenProps {
    cryptoData: CryptoAsset[] | null;
}
  

export interface ApiResponse {
    data: CryptoAsset[]; // The array of CryptoAssets is wrapped in a "data" object
}
  
export interface HistoryResponse {
    data: HistoryPoint[]; 
}

  // hard coded limit of 10 responses from the api
export async function fetchCryptoPrices(ids?: string[], search?: string, limit=10, offset?: string): Promise<ApiResponse> { 

    // CoinCap api URL - assets API endpoint
    let url = `https://api.coincap.io/v2/assets`;

    // build query based on params 
    const queryParams = new URLSearchParams(); 

    if (search) queryParams.append('search', search);
    if (ids) queryParams.append('ids', ids.join(','));
    if (offset) queryParams.append('offset', offset.toString());

    // hard coded limit of 10 responses from the api
    queryParams.append('limit', limit.toString());

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


export async function fetchBitcoinHistory(): Promise<HistoryResponse> {
    // get data 12m ago
    const endDate = new Date();
    const startDate = new Date();

    // Convert dates to UNIX timestamps in milliseconds
    const endTimestamp = endDate.getTime();
    const startTimestamp = startDate.getTime();

    // Construct the URL with the interval and the start/end timestamps
    let url = "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1";

    // testing url construction 
    console.log(url);

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) throw new Error(`HTTP status ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching Bitcoin history:", error);
        throw error;
    }
};
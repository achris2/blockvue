import { ChildrenProps } from "@/services/api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function TopCrypto({ cryptoData }: ChildrenProps) {
  console.log("CryptoData received in topten.tsx", cryptoData);
  if (!cryptoData) {
    console.log("cryptoData is still null or undefined"); 
    return <div>Loading...</div>;  
  }; 

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-secondary overflow scroll">
      <h3 className="text-lg font-bond text-secondary-foreground"></h3>
      <Table className="w-full">
    <TableCaption>leaderboard: top 10 cryptocurrencies by market cap</TableCaption>
    <TableHeader>
      <TableRow className="bg-secondary">
        <TableHead className="w-[50px]">#</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Market Cap ($USD)</TableHead>
        {/* <TableHead className="text-right">Volume (24h)</TableHead> */}
      </TableRow>
    </TableHeader>
        <TableBody className="bg-primary-foreground">
          {cryptoData.map((asset) => (
                  <TableRow key={asset.rank}>
                  <TableCell className="font-medium">{asset.rank}</TableCell>
                  <TableCell>{asset.name}, {asset.symbol}</TableCell>
                  <TableCell>{parseFloat(asset.marketCapUsd).toFixed(0)}</TableCell>
                </TableRow>
            
          ))}
    </TableBody>
  </Table>
  
    </div>
  )
}

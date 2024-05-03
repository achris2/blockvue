import Image from "next/image";
import macrovueLogo from "@/app/img/macrovue-logo.svg";
export default function Header() {
    return (
        <div className="flex justify-between px-4 pt-4">
            <Image
                src= {macrovueLogo}
                alt="macrovue"
                height={135}
                width={200}
            />
        </div>
  )
}

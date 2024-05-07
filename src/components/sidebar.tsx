import Link from "next/link";
import { AreaChart, Gem, Landmark, Settings, User } from "lucide-react";
import Image from "next/image";
import macrovueLogo from "@/app/img/macrovue-logo.svg";

interface SidebarProps{
    children: React.ReactNode;
}

export default function Sidebar({ children } : SidebarProps) {
  return (
      <div className="flex">
          <div className="fixed w-20 h-screen p-4 bg-secondary border-r-[1px] flex flex-col justify-between">
              <div className="flex flex-col items-center">
              <div>
                    <Image
                        src= {macrovueLogo}
                        alt="macrovue"
                  />
                  </div>
                  <Link href="/">
                      <div className="bg-primary text-white rounded-lg inline-block p-3">
                          <Gem size={20} />
                      </div>
                  </Link>
                  <span className="border-b-[1px] border-slate-200 w-full p-2 mb-1"/>
                  <Link href="/">
                      <div className="bg-secondary-foreground text-white hover:bg-primary cursor-pointer my-4 p-3 rounded-lg inline-block">
                          <Landmark size={20} />
                      </div>
                  </Link>
                  <Link href="/">
                      <div className="bg-secondary-foreground text-white hover:bg-primary cursor-pointer my-4 p-3 rounded-lg inline-block">
                          <User size={20} />
                      </div>
                  </Link>
                  <Link href="/">
                      <div className="bg-secondary-foreground text-white hover:bg-primary cursor-pointer my-4 p-3 rounded-lg inline-block">
                          <AreaChart size={20} />
                      </div>
                  </Link>
                  <Link href="/">
                      <div className="bg-secondary-foreground text-white hover:bg-primary cursor-pointer my-4 p-3 rounded-lg inline-block">
                          <Settings size={20} />
                          
                      </div>
                  </Link>
              </div> 
          </div>
          <main className="ml-20 w-full">
              {children}
          </main>
    </div>
  )
}

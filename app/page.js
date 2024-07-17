import Navbar from "./_components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div className=" h-screen overflow-hidden">
      <Navbar />
      <div>
        <Image src="/background.jpg" fill className="-z-10"/>
      <div className="flex items-center justify-center h-screen">
        <div className="mt-[-35px]">
          <h1 className="text-7xl font-bold text-slate-50">Welcome to Portfolio Hub</h1>
        </div>
      </div>
      </div>
    </div>
  );
}

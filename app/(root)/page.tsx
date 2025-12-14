import Alert01 from "@/components/apexUi/alert/alert-01";
import Alert02 from "@/components/apexUi/alert/alert-02";
import Alert03 from "@/components/apexUi/alert/alert-03";
import Alert04 from "@/components/apexUi/alert/alert-04";
import Alert05 from "@/components/apexUi/alert/alert-05";
import Alert06 from "@/components/apexUi/alert/alert-06";
import Alert07 from "@/components/apexUi/alert/alert-07";
import {HeroSection} from "@/components/LandingPage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black/5 overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12 lg:-mt-20">

        <HeroSection/>

      </div>

      <div className="flex flex-col justify-center gap-10">
      <Alert01/>
      <Alert02/>
      <Alert03/>
      <Alert04/>
      <Alert05/>
      <Alert06/>
      <Alert07/>

      </div>
      
    </main>
  );
}
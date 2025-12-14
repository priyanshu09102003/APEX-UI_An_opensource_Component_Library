import TopNav from "@/components/apexUi/blocks/dashboard/top-nav";
import ParticlesBackground from "@/components/apexUi/particles-background";
import {HeroSection} from "@/components/LandingPage/HeroSection";


export default function Home() {
  return (
    <main className="bg-white dark:bg-black/5 overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12 lg:-mt-20">

        <HeroSection/>

      </div>

      <div className="flex flex-col justify-center gap-10">
        
       
      </div>
      
    </main>
  );
}
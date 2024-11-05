
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack"
import Clients from "@/components/Clients";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
       <Hero />
       <Grid />
       <TechStack />
       <RecentProjects />
       <Clients />
       <Approach />
       <Footer />
      </div>
    </main>
  );
}

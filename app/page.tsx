import { Navbar } from "@/components/navbar";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Planets } from "@/components/sections/planets";
import { Resources } from "@/components/sections/resources";
import { Stats } from "@/components/sections/stats";
import { Timeline } from "@/components/sections/timeline";
import { SpaceScene } from "@/components/three/space-scene";

export default function Home() {
  return (
    <>
      <Navbar />
      <SpaceScene />
      <main id="main">
        <Hero />
        <About />
        <Stats />
        <Timeline />
        <Planets />
        <Resources />
      </main>
      <Footer />
    </>
  );
}

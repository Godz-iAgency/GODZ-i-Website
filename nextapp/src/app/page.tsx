import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { TwoPath } from "@/components/two-path";
import { Problem } from "@/components/problem";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Proof } from "@/components/proof";
import { About } from "@/components/about";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TwoPath />
        <Problem />
        <Process />
        <Services />
        <Proof />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

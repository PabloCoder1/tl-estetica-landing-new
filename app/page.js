import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Procedimentos from "@/components/Procedimentos";
import Galeria from "@/components/Galeria";
import Sobre from "@/components/Sobre";
import Agendamento from "@/components/Agendamento";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Procedimentos />
      <Galeria />
      <Sobre />
      <Agendamento />
      <Footer />
    </main>
  );
}

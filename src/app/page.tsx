import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leading from "@/components/Leading";
import { CircleArrow } from "@/utils/icons";

export default function Home() {
  return (
    <section className="bg-white">
      <Hero />
      <Leading />
      <Footer
        link="/support-coordination"
        topText="Support Coordination"
        icon={<CircleArrow className="text-main-purple" />}
      />
    </section>
  );
}

import ExploreNdis from "@/components/ExploreNdis";
import Footer from "@/components/Footer";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import Leading from "@/components/Leading";
import OurApproach from "@/components/OurApproach";
import OurServices from "@/components/OurServices";
import { CircleArrow } from "@/utils/icons";

export default function Home() {
  return (
    <section className="bg-white">
      <Hero />
      <Leading />
      <ExploreNdis />
      <OurServices />
      <HappyCustomers />
      <OurApproach />
      <Footer topText="Support Coordination" icon={<CircleArrow className="text-main-purple" />} />
    </section>
  )
}

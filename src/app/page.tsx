import ExploreNdis from "@/components/ExploreNdis";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import Leading from "@/components/Leading";
import OurApproach from "@/components/OurApproach";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <section className="bg-white">
      <Hero />
      <Leading />
      <ExploreNdis />
      <OurServices />
      <HappyCustomers />
      <OurApproach />
    </section>
  )
}

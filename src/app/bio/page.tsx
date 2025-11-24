"use client";
import Footer from "@/components/Footer";
import { Typography } from "@material-tailwind/react";
import CustomHero from "@/components/custom-components/customHero";
// import { Send } from "@/utils/icons";

export default function Bio() {
  return (
    <section className="h-screen">
      <CustomHero
        text="BIO"
        className="hero_bg flex items-center"
        textStyle="text-white text-4xl md:text-6xl font-bold ml-5 bg-main-purple px-8 rounded-md"
      />
      <div className="p-4 mt-8">
        <Typography
          as={"p"}
          className="text-gray-500 text-base lg:text-lg leading-9 font-normal"
        >
          Onyekwere Akym Uchechukwu, fondly called OAU by his friends, is a
          Nigerian philanthropist, politician, and entrepreneur born on the 9th
          of September 1974, in Enugu State. He hails from Amaba in Isuikwuato
          Local Government Area of Abia State. His early life was shaped by
          strong community values and discipline.
        </Typography>
        <div className="mt-8">
          <Typography
            as={"h2"}
            className="font-semibold text-gray-500 text-lg lg:text-2xl"
          >
            Educational Background
          </Typography>
          <Typography
            as={"p"}
            className="text-gray-500 text-base lg:text-lg leading-9 font-normal"
          >
            OAU had his primary education at Udi Road Primary School in Asata,
            Enugu State. He went further to attend the College of the Immaculate
            Conception (C.I.C.), Enugu, for his secondary education. OAU
            obtained a Bachelor of Science degree in Economics from Abia State
            University. Other educational pursuits saw him attend Nashville Auto
            Diesel College in Nashville, Tennessee, USA.
          </Typography>
        </div>
        <div className="mt-8">
          <Typography
            as={"h2"}
            className="font-semibold text-gray-500 text-lg lg:text-2xl"
          >
            PHILANTROPHY AND HUMANITARIAN
          </Typography>
          <Typography
            as={"p"}
            className="text-gray-500 text-base lg:text-lg leading-9 font-normal"
          >
            OAU&apos;s commitment to service is evident through his nonprofit
            organization, the Onyekwere Akym Uche Foundation, which focuses on
            the delivery of healthcare, education, community development, and
            his desire to uplift others. OAU&apos;s foundation has provided
            medical assistance, supported local hospitals, and offered
            scholarships to indigent students.
          </Typography>
        </div>
        <div className="mt-8">
          <Typography
            as={"h2"}
            className="font-semibold text-gray-500 text-lg lg:text-2xl"
          >
            Political history and career highlights
          </Typography>
          <Typography
            as={"p"}
            className="text-gray-500 text-base lg:text-lg leading-9 font-normal"
          >
            In politics, OAU was a 2023 gubernatorial candidate in Abia State
            under the umbrella of Action Alliance (AA) party, advocating for a
            leadership that&apos;s transparent, developmental, and accountable
            to the people of his state. In his desire to see a developed Abia,
            OAU has demonstrated his desire and readiness to offer his services
            as required to achieve sustained developmental goals. OAU is a
            family man with parental and community values that drive his
            philanthropic efforts. As a transformative leader, OAU&apos;s legacy
            is built on determination, service, and a pursuit of positive
            change. He&apos;s an advocate of prosperity, which describes the
            objectives of his foundation as delivering positivity to humanity.
            His story serves as an inspiration for combining passion with the
            purpose of uplifting communities and bridging the inequality gaps.
          </Typography>
        </div>
        <div className="mt-8">
          <Typography
            as={"h2"}
            className="font-semibold text-gray-500 text-lg lg:text-2xl"
          >
            Hobbies
          </Typography>
          <Typography
            as={"p"}
            className="text-gray-500 text-base lg:text-lg leading-9 font-normal"
          >
            OAU spends his leisure times on badminton, table tennis, kickboxing,
            financial literature, and nature.
          </Typography>
        </div>
      </div>
      <Footer
        link="/contact"
        topText="Contact Now"
        // icon={<Send className="text-main-purple" />}
      />
    </section>
  );
}

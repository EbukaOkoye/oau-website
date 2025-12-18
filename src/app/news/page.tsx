import Image from "next/image";
import { news } from "@/utils/data";
import { images } from "@/utils/images";
import Link from "next/link";
import CustomHero from "@/components/custom-components/customHero";
import { cutText } from "@/utils/helpers";
import Footer from "@/components/Footer";

export default function News() {
  return (
    <section className="h-screen">
      <CustomHero
        className="hero_bg flex items-center"
        textStyle="text-white text-4xl md:text-6xl font-bold ml-5 bg-main-purple px-8 rounded-md"
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 📰 MAIN ARTICLE */}
          <article className="lg:col-span-2">
            <h1 className="text-3xl text-main-blue lg:text-4xl font-bold mb-4">
              My Ambition Has Always Been About Service, Not Self — Onyekwere
              Akym Uche Declares
            </h1>
            <div className="w-full h-72 !overflow-hidden mb-6 rounded-xl">
              <Image
                src={images.oau_white}
                alt="Main news"
                className="w-object-cover"
              />
            </div>

            <div className="prose max-w-none text-gray-500">
              <p>
                Former Abia governorship candidate and founder of the OAU
                foundation, Hon Onyekwere Akym Uche (OAU), has reaffirmed that
                his political ambition is firmly rooted in a desire to serve the
                people rather than pursue personal gain, stressing that
                leadership must be guided by humility, accountability, and a
                strong sense of responsibility to the public. He made this
                declaration, where he outlined his vision for people-focused
                leadership. <br /> <br />
                Speaking, Akym noted that politics should not be seen as a
                platform for self enrichment or personal advancement but as a
                sacred trust placed in the hands of leaders by the people. He
                emphasised that true leadership requires sincerity of purpose
                and a willingness to place the collective good above individual
                interests.
              </p>
              <p>
                “My ambition has always been about service, not self,” OAU said.
                “Leadership is not a privilege to be exploited but a
                responsibility that demands sacrifice, integrity, and genuine
                concern for the wellbeing of the people.” <br /> <br /> He
                further explained that humility remains a core value in his
                approach to leadership, noting that leaders must be accessible
                and willing to listen to the concerns of ordinary citizens.
                According to him, public office holders should see themselves as
                servants who are accountable to the people at all times. <br />
                <br /> “A leader must lead with humility and a deep sense of
                responsibility,” he stated. “When leaders remember that they are
                servants of the people, governance becomes more compassionate,
                inclusive, and effective.” <br /> <br /> Onyekwere Akym Uche
                also criticised leadership styles driven by personal ambition
                and material interests, warning that such approaches often lead
                to poor governance and public distrust. He urged aspiring
                leaders to examine their motives and commit themselves to
                ethical conduct and transparent service.
              </p>
            </div>
          </article>
          {/* 🗞️ SIDE ARTICLES */}
          <aside className="space-y-6 text-gray-500">
            <h3 className="text-xl font-semibold border-b pb-2">Other News</h3>

            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="flex gap-4 group"
              >
                <div className="w-24 h-20 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div>
                  <h4 className="text-sm text-main-blue font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    {cutText(item.text, 130)}
                  </p>
                  <p className="text-sm font-semibold text-gray-500 mt-1 hover:text-main-blue">
                    Read more →
                  </p>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </section>
      <Footer />
    </section>
  );
}

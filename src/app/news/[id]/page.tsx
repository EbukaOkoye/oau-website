"use client";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/utils/data";
import { notFound, useParams } from "next/navigation";
import Footer from "@/components/Footer";

export default function NewsDetails() {
  const params = useParams();
  const article = news.find((item) => item.id === Number(params.id));

  if (!article) notFound();

  return (
    <section className="h-screen">
      <section className="max-w-7xl mx-auto px-4 py-14 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* MAIN ARTICLE */}
          <article className="lg:col-span-2">
            <h1 className="text-3xl lg:text-4xl font-bold text-main-blue mb-6">
              {article.title}
            </h1>

            <div className="w-full h-72 !overflow-hidden mb-6 rounded-xl">
              <Image
                src={article.image}
                alt={article.title}
                className="w-object-cover"
                priority
              />
            </div>

            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {article.text}
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            <h3 className="text-xl font-semibold border-b pb-2 text-main-blue">
              Other News
            </h3>

            {news
              .filter((item) => item.id !== article.id)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="flex gap-4 group"
                >
                  <div className="relative w-24 h-20 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-main-blue line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 hover:text-main-blue">
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

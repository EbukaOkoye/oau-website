"use client";
import { usePathname, useRouter } from "next/navigation";
import { subLinks } from "@/utils/data";
import Sil from "./Sil";
import { CircleArrow } from "@/utils/icons";
import Sta from "./Sta";
import Dls from "./Dls";
import Paa from "./Paa";
import Cp from "./Cp";
import Sc from "./Sc";
import Cn from "./Cn";
import Ht from "./Ht";
import Prc from "./Prc";

export default function NdisServiceWireFrame() {
  const router = useRouter();
  const pathname = usePathname();
  const activeLink = subLinks.find((link) => link.link === pathname);

  // Map the path to the appropriate component
  const renderContentForPath = (path: string) => {
    switch (path) {
      case "/supported-independent-living":
        return <Sil name={activeLink?.name} />;
      case "/ndis-services/short-term-accommodation":
        return "";
      case "/assistance-with-daily-living-life-skills":
        return <Dls name={activeLink?.name} />;
      case "/assistance-with-daily-personal-activities":
        return <Paa name={activeLink?.name} />;
      case "/community-participation":
        return <Cp name={activeLink?.name} />;
      case "/support-coordination":
        return <Sc name={activeLink?.name} />;
      case "/community-nursing":
        return <Cn name={activeLink?.name} />;
      case "/household-tasks":
        return <Ht name={activeLink?.name} />;
      case "/psychosocial-recovery-coach":
        return <Prc name={activeLink?.name} />;
      default:
        return <Sta name={activeLink?.name} />;
    }
  };

  return (
    <section className="mt-40">
      <div className="h-44 rounded-bl-[100%] rounded-br-[30%] p-4 bg-light-grey">
        <h2 className="text-main-pink text-2xl lg:text-4xl text-center font-semibold">
          NDIS Services
        </h2>
        <div className="w-32 h-1 bg-main-purple mx-auto mt-2" />
      </div>
      <div className="grid gap-4 lg:grid-cols-3 px-4 mt-24">
        <section className="col-span-1 p-4">
          <div className="rounded-xl border border-main-purple p-3 bg-[#f9f9f9] hover:shadow-2xl !h-full">
            {subLinks.map((_links) => (
              <div
                key={_links.name}
                onClick={() => router.push(_links.link)}
                className="rounded-xl border border-main-purple p-4 flex items-center justify-between gap-2 my-4 cursor-pointer hover:border-r-8 hover:border-r-main-purple transition-all ease-linear duration-1000"
              >
                <p className="text-main-purple font-semibold w-fit text-lg lg:text-xl break-after-all">
                  {_links.name}
                </p>
                <CircleArrow className="text-main-pink text-lg" />
              </div>
            ))}
          </div>
        </section>
        <div className="col-span-2">{renderContentForPath(pathname)}</div>
      </div>
    </section>
  );
}

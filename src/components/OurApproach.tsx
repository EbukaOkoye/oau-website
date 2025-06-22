import { approachList } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="pt-14 pb-10 px-4 bg-light-grey">
      <div className="flex-col flex lg:flex-row items-center p-2">
        <div className="bg-white border-2 border-main-purple rounded-2xl p-4 shadow-md translate-x-3.5 lg:h-[34.4rem]">
          <div className="">
            <h2 className="font-bold text-2xl lg:text-4xl text-black">
              Our Approach
            </h2>
            <div className="w-20 h-1 bg-main-purple mt-2" />
          </div>
          <div className="">
            {approachList.map((_list, id) => (
                <div key={id} className="my-5 flex items-center gap-5">
                    <_list.icon className="text-main-purple" size={18} />
                    <h5 className="text-black font-medium text-base leading-8">{_list.text}</h5>
                </div>
            ))}
          </div>
        </div>
        <Image src={images.thumbnail_six} alt="approach" className="lg:h-[30.4rem]" />
      </div>
    </section>
  );
}

import { images } from "@/utils/images";
import Image from "next/image";

export default function JoinSunflower() {
  return (
    <section className="grid gap-5 lg:grid-cols-2 mt-24">
      <div className="p-4">
        <h3 className="text-main-purple text-xl mb-1 font-bold lg:text-3xl text-center">
          Join Sunflower Care
        </h3>
        <p className="text-gray-500 text-lg lg:text-lg leading-8 font-medium mt-5">
          If you are passionate about making a difference to someone’s life then
          the disability sector is the perfect career choice for you. A career
          in disability services is like no other. The diversity of roles in
          this sector is unparalleled. We believe in maintaining a healthy
          work-life balance which is why we offer flexible work arrangements for
          our staff. We offer regular training and development opportunities to
          our employees.
        </p>
        <p className="text-gray-500 text-lg lg:text-lg leading-8 font-medium mt-5">
          We are constantly looking for talented and passionate people to join
          our team. If you would like to join us and think that you can meet our
          requirements of an advertised job, we would love to hear from you.
          When applying for a role, you will need to submit your resume and a
          cover letter.
        </p>
      </div>
      <div className="">
        <Image
          src={images.careers}
          alt="careers-image"
          className="lg:h-[28rem]"
        />
      </div>
    </section>
  );
}

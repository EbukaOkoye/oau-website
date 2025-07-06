"use client";
import { useState } from "react";
import CareersOffers from "@/components/CareersOffer";
import CurrentVacancies from "@/components/CurrentVacancies";
import BreadcrumbPill from "@/components/custom-components/BreadcrumbPill";
import Input from "@/components/custom-components/Input";
import JoinSunflower from "@/components/JoinSunflower";
import { images } from "@/utils/images";
import Image from "next/image";
import CustomButton from "@/components/custom-components/Button";
import { CalendarCheck, Send } from "@/utils/icons";
import Footer from "@/components/Footer";

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
    role: "",
    experience: 0,
    qualification: "",
    resume: "",
    coverLetter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Contact Form Submission";
    const body = `
    First Name: ${formData.firstName}
    Last Name: ${formData.lastName}
    Contact Number: ${formData.contactNumber}
    Email: ${formData.email}
    Cover letter: ${formData.coverLetter}
    Resume: ${formData.resume}
    Role: ${formData.role}
    Experience: ${formData.experience}
    Message: ${formData.message}
  `;

    // Encode the subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Open default mail client with prefilled email
    window.location.href = `mailto:your-email@example.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.link_img}
          alt="About us background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>
      {/* Overlay Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 !z-40">Careers</h1>
        <div className="w-24 h-1 bg-white mb-4 !z-40" />
        <p className="text-lg md:text-2xl font-medium max-w-2xl !z-40">
          Passionate about making a difference to someone’s life -{" "}
          <br className="hidden lg:block" /> Disability sector is a perfect
          career choice
        </p>
      </div>
      {/* Curved Bottom Section with Breadcrumb and Logo */}
      <div className="absolute -bottom-7 w-full">
        <svg
          className="w-full h-[80px] md:h-[100px] text-gray-100"
          viewBox="0 0 1440 100"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>

        <div className="absolute bottom-4 left-6 flex items-center gap-4">
          <BreadcrumbPill currentRoute="Careers" />
        </div>
      </div>
      <div className="pt-16 px-4 md:w-9/12 mx-auto mt-14">
        <p className="text-gray-500 text-base lg:text-lg font-medium text-center">
          <b className="text-main-purple">
            Sunflower Care is a Registered NDIS Service Provider
          </b>{" "}
          and is one of the fastest-growing disability-care facilities available
          here in South Australia. Our Participants have the opportunity to live
          an enriched, and fulfilling life in communities of their choice.
        </p>
        <p className="text-gray-500 text-lg lg:text-xl font-medium text-center mt-6">
          At Hola Support we understand how important is WORK-LIFE BALANCE.
          Maintaining a healthy work-life balance is not only important for
          health and relationships, but it can also improve productivity and
          ultimately performance at work.
        </p>
      </div>
      <JoinSunflower />
      <CareersOffers />
      <CurrentVacancies />
      <div className="py-10 px-4 mt-6" id="career-form">
        <h1 className="text-gray-500 text-xl lg:text-3xl font-bold text-center mb-6">
          Expression of Interest
        </h1>
        <form
          className="grid grid-cols-2 justify-between gap-4 p-6 lg:w-10/12 lg:mx-auto border-2 border-main-purple hover:shadow-2xl hover:bg-light-grey rounded-lg"
          onSubmit={handleSubmit}
        >
          <Input
            name="firstName"
            label="First Name"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <Input
            name="lastName"
            label="Last Name"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <Input
            name="contactNumber"
            label="Contact Number"
            type="text"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
          />
          <Input
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <div className="p-2 my-4">
            <label htmlFor="role" className="text-main-purple mb-3">
              Role Applying For
            </label>
            <select
              name="role"
              id="role"
              className="w-full border-b-2 border-b-main-purple rounded-2xl bg-white text-black p-3 focus:outline-none"
            >
              <option value="Business Manager" className="">
                Business Manager
              </option>
              <option value="Physiotherapist" className="">
                Physiotherapist
              </option>
              <option value="Occupational Therapist" className="">
                Occupational Therapist
              </option>
              <option value="Support Worker" className="">
                Support Worker
              </option>
            </select>
          </div>
          <Input
            name="exprerience"
            label="Experience in Years"
            type="number"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Years of experience"
          />
          <Input
            name="qualification"
            label="Qualification"
            type="text"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Education Qualification"
            divClassName="!col-span-2"
          />
          <Input
            name="resume"
            label="Upload resume"
            type="file"
            value={formData.resume}
            onChange={handleChange}
            accept="application/pdf"
            className="!border-b-0"
          />
          <Input
            name="coverLetter"
            label="Upload cover letter"
            type="file"
            value={formData.coverLetter}
            onChange={handleChange}
            accept="application/docx"
            className="!border-b-0"
          />
          <textarea
            name="message"
            onChange={handleChange}
            value={formData.message}
            placeholder="Message"
            cols={5}
            rows={10}
            className="w-full text-black focus:outline-none border-b-2 p-3 border-b-main-purple col-span-2 rounded-2xl bg-white"
          />
          <div className="col-span-2 my-5">
            <CustomButton
              type="submit"
              className="bg-main-purple px-6 py-2 flex items-center gap-3 text-white mx-auto cursor-pointer hover:scale-150 transition ease-in duration-700"
            >
              <span className="">Send</span>
              <Send className="text-white" />
            </CustomButton>
          </div>
        </form>
      </div>
      <Footer
        link="/contact"
        icon={<CalendarCheck className="text-main-purple" />}
        topText="Come and meet us"
      />
    </section>
  );
}

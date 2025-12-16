"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import { Typography } from "@material-tailwind/react";
import CustomHero from "@/components/custom-components/customHero";
import Input from "@/components/custom-components/Input";
import { Send } from "@/utils/icons";
import CustomButton from "@/components/custom-components/Button";

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    reason: "",
  });

  const [partnerData, setPartnerData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    reason: "",
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

  const handlePartnerChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setPartnerData((prevData) => ({
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
    Message: ${formData.reason}
  `;

    // Encode the subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Open default mail client with prefilled email
    window.location.href = `mailto:info@onyekwereakymuche.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Contact Form Submission";
    const body = `
    First Name: ${partnerData.firstName}
    Last Name: ${partnerData.lastName}
    Contact Number: ${partnerData.contactNumber}
    Email: ${partnerData.email}
    Message: ${partnerData.reason}
  `;

    // Encode the subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Open default mail client with prefilled email
    window.location.href = `mailto:info@onyekwereakymuche.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section className="h-screen">
      <CustomHero
        className="hero_bg flex items-center"
        textStyle="text-white text-4xl md:text-6xl font-bold ml-5 bg-main-purple px-8 rounded-md"
      />
      <section className="grid lg:grid-cols-2 gap-4 py-10 px-4 mt-14">
        <div className="">
          <div className="h-full flex flex-col justify-center px-6 md:px-16">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-main-blue">
              Volunteer
            </h1>
            <div className="w-24 h-1 bg-main-blue mb-4" />
            <form className="p-0 gap-4" onSubmit={handleSubmit}>
              <Input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="!border-0 rounded-md !bg-gray-200 w-full"
              />
              <Input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="!border-0 rounded-md !bg-gray-200 w-full"
              />
              <Input
                name="contactNumber"
                type="text"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                className="!border-0 rounded-md !bg-gray-200 w-full"
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="!border-0 rounded-md !bg-gray-200 w-full"
              />
              <textarea
                name="reason"
                onChange={handleChange}
                value={formData.reason}
                placeholder="Why you want to volunteer"
                cols={5}
                className="w-full text-black focus:outline-none p-3 col-span-2 rounded-md bg-gray-200"
              />
              <div className="my-5">
                <CustomButton
                  type="submit"
                  className="group bg-main-blue w-full px-6 py-3 flex justify-center items-center gap-3 text-white mx-auto cursor-pointer hover:bg-white hover:text-main-blue hover:border-2 hover:border-main-blue transition ease-in duration-700"
                >
                  <span className="">Send</span>
                  <Send className="text-white group-hover:text-main-blue" />
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
        <div className="">
          <div className="h-full flex flex-col justify-center px-6 md:px-16">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-main-blue">
              Partner with us
            </h1>
            <div className="w-24 h-1 bg-main-blue mb-4" />
            <form className="p-0 gap-4" onSubmit={handlePartnerSubmit}>
              <Input
                name="firstName"
                type="text"
                value={partnerData.firstName}
                onChange={handlePartnerChange}
                placeholder="First Name"
                className="!border-0 rounded-md !bg-gray-200 w-full"
              />
              <Input
                name="lastName"
                type="text"
                value={partnerData.lastName}
                onChange={handlePartnerChange}
                placeholder="Last Name"
                className="!border-0 rounded-md !bg-gray-200 w-full"
              />
              <Input
                name="contactNumber"
                type="text"
                value={partnerData.contactNumber}
                onChange={handlePartnerChange}
                placeholder="Contact Number"
                className="!border-0 rounded-md !bg-gray-200 w-full"
              />
              <Input
                name="email"
                type="email"
                value={partnerData.email}
                onChange={handlePartnerChange}
                placeholder="Email"
                className="!border-0 rounded-md !bg-gray-200 w-full"
              />
              <textarea
                name="reason"
                onChange={handlePartnerChange}
                value={partnerData.reason}
                placeholder="What way do you want to partner with us"
                cols={5}
                className="w-full text-black focus:outline-none p-3 col-span-2 rounded-md bg-gray-200"
              />
              <div className="my-5">
                <CustomButton
                  type="submit"
                  className="group bg-main-blue w-full px-6 py-3 flex justify-center items-center gap-3 text-white mx-auto cursor-pointer hover:bg-white hover:text-main-blue hover:border-2 hover:border-main-blue transition ease-in duration-700"
                >
                  <span className="">Send</span>
                  <Send className="text-white group-hover:text-main-blue" />
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

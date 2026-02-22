"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Input from "@/components/custom-components/Input";
import { contactInfo, socialLinks } from "@/utils/data";
import CustomButton from "@/components/custom-components/Button";
import { Send } from "@/utils/icons";
import CustomHero from "@/components/custom-components/customHero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          fields: formData,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }

      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        message: "",
      });
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              Message us
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
                name="message"
                onChange={handleChange}
                value={formData.message}
                placeholder="Message"
                cols={5}
                className="w-full text-black focus:outline-none p-3 col-span-2 rounded-md bg-gray-200"
              />
              <div className="my-5">
                <CustomButton
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-main-blue w-full px-6 py-3 flex justify-center items-center gap-3 text-white mx-auto cursor-pointer hover:bg-white hover:text-main-blue hover:border-2 hover:border-main-blue transition ease-in duration-700 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="">{isSubmitting ? "Sending..." : "Send"}</span>
                  {!isSubmitting && <Send className="text-white group-hover:text-main-blue" />}
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
        <div className="">
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-main-blue">
              Contact info
            </h1>
            <div className="w-24 h-1 bg-main-blue mb-4" />
          </div>
          {contactInfo.map((_info, id) => (
            <div
              key={id}
              className="flex items-center rounded-2xl group-hover:bg-transparent my-4 cursor-pointer"
            >
              <div className="p-3 bg-main-blue w-10 h-10 flex items-center justify-center">
                <_info.icon className="text-white" />
              </div>
              <div className="p-3 bg-white peer-hover:bg-grey-text rounded-lg font-bold text-gray-500">
                {_info.label}
              </div>
            </div>
          ))}
          <div className="">
            <Typography
              as={"p"}
              className="text-base lg:text-xl text-main-blue mb-3 font-semibold"
            >
              Find us on:
            </Typography>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="text-main-blue text-base lg:text-3xl hover:text-secondary-blue transition-colors duration-200"
                >
                  <social.icon className="hover:text-secondary-blue" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

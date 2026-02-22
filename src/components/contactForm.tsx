"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Input from "@/components/custom-components/Input";
import CustomButton from "@/components/custom-components/Button";
import { Send } from "@/utils/icons";
import { Typography } from "@material-tailwind/react";
import { contactTexts } from "@/utils/data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
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
          formType: "join-us",
          fields: formData,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }

      toast.success("Thank you for joining us! We will be in touch soon.");
      setFormData({
        name: "",
        phoneNumber: "",
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
    <section className="lg:mt-56 lg:px-3 py-10" data-aos="zoom-in-up">
      <section className="rounded-md">
        <div className="!w-full lg:max-w-7xl mx-auto lg:px-6">
          {/* LEFT SECTION */}
          <div className="space-y-8">
            <Typography
              as={"h4"}
              className="text-xl lg:text-[40px] text-main-blue font-semibold section-heading-accent"
            >
              THE OAU FOUNDATION
            </Typography>
            <div className="bg-white p-4 mt-14 rounded-xl shadow-lg lg:relative flex flex-col lg:flex-row lg:h-96 lg:p-6 justify-between gap-6 border border-gray-100">
              <div>
                <Typography
                  as={"p"}
                  className="text-gray-500 max-w-xl lg:text-xl leading-relaxed"
                >
                  The OAU Foundation is a humanitarian non-governmental
                  organization (NGO) dedicated to improving the lives of
                  individuals and communities in need. Passionate about
                  impacting humanity through humanitarian efforts, creating
                  possibility in Humanity, Charity Service and empowerment
                  programs
                </Typography>

                {/* Service Icons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {contactTexts.map((_contact, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center space-y-3 group"
                    >
                      <div className="w-28 h-28 rounded-full bg-deep-orange flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                        <span className="text-3xl text-white">
                          <_contact.icons />
                        </span>
                      </div>
                      <Typography
                        as={"p"}
                        className="font-semibold text-base text-main-blue"
                      >
                        {_contact.name}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT -- JOIN US FORM */}
              <div className="bg-main-blue lg:w-[35%] lg:absolute lg:h-fit lg:right-5 lg:-top-32 rounded-xl py-6 px-8 shadow-xl">
                <Typography
                  as={"h4"}
                  className="text-white text-center text-2xl lg:text-4xl font-bold mb-2"
                >
                  JOIN US
                </Typography>
                <div className="w-10 h-1 bg-deep-orange rounded-full mx-auto mb-4" />
                <form className="p-3 w-full space-y-1" onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="p-3 rounded-md bg-white text-black outline-none !border-0 transition-shadow duration-200 focus:ring-2 focus:ring-deep-orange"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-3 rounded-md bg-white text-black outline-none !border-0 transition-shadow duration-200 focus:ring-2 focus:ring-deep-orange"
                  />
                  <Input
                    name="contactNumber"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="p-3 rounded-md bg-white text-black outline-none !border-0 transition-shadow duration-200 focus:ring-2 focus:ring-deep-orange"
                  />
                  <textarea
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Message"
                    cols={5}
                    className="w-full p-3 rounded-md bg-white text-black outline-none !border-0 transition-shadow duration-200 focus:ring-2 focus:ring-deep-orange"
                  />
                  <div className="my-4">
                    <CustomButton
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white w-full justify-center px-6 py-4 flex items-center gap-3 text-main-blue mx-auto cursor-pointer rounded-md transition-all duration-300 hover:bg-deep-orange hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send"}</span>
                      {!isSubmitting && <Send className="text-main-blue" />}
                    </CustomButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

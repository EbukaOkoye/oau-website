"use client";
import { useState } from "react";
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
    First Name: ${formData.name}
    Contact Number: ${formData.phoneNumber}
    Email: ${formData.email}
    Message: ${formData.message}
  `;

    // Encode the subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Open default mail client with prefilled email
    window.location.href = `mailto:your-email@example.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section className="mt-56 px-3 py-10 border-2 border-amber-600">
      <section className="rounded-md">
        {/* <div className=" relative"></div> */}
        <div className="max-w-7xl mx-auto px-6">
          {/* LEFT SECTION */}
          <div className="space-y-8">
            {/* Years of Experience */}
            <Typography
              as={"h4"}
              className="text-xl lg:text-[40px] text-main-blue font-semibold"
            >
              THE OAU FOUNDATION
            </Typography>
            <div className="bg-white mt-14 rounded-lg shadow-xl lg:relative flex flex-col lg:flex-row lg:h-80 p-4 justify-between gap-4">
              <div className="">
                {/* Description */}
                <Typography as={"p"} className="text-gray-500 max-w-xl">
                  The OAU Foundation is a humanitarian non-governmental
                  organization (NGO) dedicated to improving the lives of
                  individuals and communities in need. Passionate about
                  impacting humanity through humanitarian efforts, creating
                  possibility in Humanity, Charity Service and empowerment
                  programs
                </Typography>

                {/* Service Icons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {contactTexts.map((_contact, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center space-y-3"
                    >
                      <div className="w-32 h-32 rounded-full bg-yellow-500 flex items-center justify-center">
                        <span className="text-4xl text-white">
                          <_contact.icons />
                        </span>
                      </div>
                      <Typography
                        as={"p"}
                        className="font-semibold text-lg text-main-blue"
                      >
                        {_contact.name}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              {/* RIGHT — APPOINTMENT FORM */}
              <div className="bg-main-blue lg:absolute lg:h-fit lg:right-5 lg:-top-32 rounded-xl py-4 px-8 shadow-xl">
                <Typography
                  as={"h4"}
                  className="text-white text-center text-2xl lg:text-4xl font-bold mb-8"
                >
                  FEEL FREE TO JOIN US
                </Typography>
                <form className="p-4 w-full" onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="p-2 rounded-sm bg-white text-black outline-none !border-0"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-2 rounded-sm bg-white text-black outline-none !border-0"
                  />
                  <Input
                    name="contactNumber"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="p-2 rounded-sm bg-white text-black outline-none !border-0"
                  />
                  <textarea
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Message"
                    cols={5}
                    className="w-full p-2 rounded-sm bg-white text-black outline-none !border-0"
                  />
                  <div className="my-5">
                    <CustomButton
                      type="submit"
                      className="bg-white w-full justify-center px-6 py-5 flex items-center gap-3 text-main-blue mx-auto cursor-pointer hover:scale-150 transition ease-in duration-700"
                    >
                      <span className="">Send</span>
                      <Send className="text-main-blue" />
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

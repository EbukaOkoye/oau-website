"use client";
import { useState } from "react";
import Input from "@/components/custom-components/Input";
import CustomButton from "@/components/custom-components/Button";
import { Send } from "@/utils/icons";
import { bottomContact, contactInfo } from "@/utils/data";

export default function CommunityParticipation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
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
          First Name: ${formData.firstName}
          Last Name: ${formData.lastName}
          Contact Number: ${formData.contactNumber}
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
    <section className="">
      <section className="border-2 border-main-purple rounded-2xl p-2 mt-10 lg:w-9/12 lg:mx-auto mb-5">
        <div className="bg-light-grey rounded-2xl p-4">
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            NDIS Funds
          </h1>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            The NDIS can fund supports for participants to enable participation
            in community, social and daily life activities. This funding can be
            included in Core and Capacity Building funds. Funding from the{" "}
            <b>Core Budget</b> can be utilised for encouraging participants to
            attend development courses, join a social group, social outings like
            going to see a movie or theatre, joining health classes or gym etc.
            <b>Capacity Building Budget</b> is mainly allocated for building
            individual’s capacity or independence and to hep learn new skills.
          </p>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 gap-8 justify-between py-10 px-4 mt-14 bg-light-grey ">
        <div className="px-4">
          <div className="flex flex-col justify-center px-6 pt-6">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-main-purple">
              Contact us
            </h1>
            <div className="w-24 h-1 bg-main-purple mb-4" />
          </div>
          <div className="border-[3px] hover:border-main-purple hover:shadow-2xl rounded-2xl mt-4">
            <form
              className="grid grid-cols-2 justify-between gap-4 p-4"
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
        </div>
        <div className="px-4">
          <div className="mb-12">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-main-purple">
              Contact info
            </h1>
            <div className="w-24 h-1 bg-main-purple mb-4" />
          </div>
          {contactInfo.map((_info, id) => (
            <div
              key={id}
              className="flex rounded-2xl group-hover:bg-transparent my-4 cursor-pointer"
            >
              <div className="p-3 bg-main-purple rounded-lg flex items-center justify-center">
                <_info.icon className="text-white" />
              </div>
              <div className="p-3 bg-white peer-hover:bg-grey-text rounded-lg font-bold text-gray-500">
                {_info.label}
              </div>
            </div>
          ))}
          <div className="mt-8">
            {bottomContact.map((_bottom, idx) => (
              <div key={idx} className="flex items-center gap-3 my-6">
                <_bottom.icon_img className="text-main-purple" />
                <p className="text-gray-500 font-normal">{_bottom.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

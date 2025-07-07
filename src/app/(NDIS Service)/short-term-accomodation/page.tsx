"use client";
import Input from "@/components/custom-components/Input";
import CustomButton from "@/components/custom-components/Button";
import { Send } from "@/utils/icons";
import { bottomContact, contactInfo } from "@/utils/data";
import { stac, supportFunding, supportInclude } from "@/utils/data";
import { useState } from "react";

export default function ShortTermAccommodation() {
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
      <section className="border-2 border-main-purple rounded-2xl p-4 mt-10 lg:w-9/12 lg:mx-auto">
        <div className="bg-light-grey rounded-2xl p-4">
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Short Term Accommodation criteria
          </h1>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            All NDIS supports must meet the reasonable and necessary criteria,
            for the NDIS to consider funding for Short Term Accommodation they
            need to know:
          </p>
          <ul className="mt-10 list-disc">
            {stac.map((_stac, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_stac}
              </li>
            ))}
          </ul>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Funding for STA in your plan?
          </h1>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            You can choose to use your Core budget on supports like Short Term
            Accommodation if it helps you pursue your goals.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            If you’d like to learn more about Short Term Accommodation, ask your
            Support Coordinator or planner at your planning meeting.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            If your circumstances change and you need Short Term Accommodation
            you can ask for a plan reassessment (review) if there isn’t enough
            funding in your plan. NDIS will include additional funding in your
            plan to cover STA if it’s reasonable and necessary.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            It is important to know that the STA is not for housing crisis
            situations. Short Term Accommodation can only be funded where the
            need relates directly to your disability.
          </p>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Short-Term Accommodation for Children?
          </h1>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            NDIS can fund Short Term Accommodation for children if it meets the
            reasonable and necessary criteria. It depends on the child’s needs
            and their family, or carers. NDIS will consider the whole family
            situation. NDIS will also talk to parents and children about other
            funded supports that may also be available to help.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            NDIS might fund Short Term Accommodation for children who need much
            more support than other children their age. For example, parents
            usually help young children with toileting, but NDIS don’t expect
            this for a teenager or adult without a disability.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            NDSI can provide funding for other supports as well as Short Term
            Accommodation. This may help families to:
          </p>
          <ul className="mt-10 list-disc">
            {supportFunding.map((_support, id) => (
              <li key={id} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_support}
              </li>
            ))}
          </ul>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Other supports might include:
          </h1>
          <ul className="mt-10 list-disc">
            {supportInclude.map((_supports, ids) => (
              <li key={ids} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_supports}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            What about supports for children at risk of needing accommodation
            outside the family home?
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            NDIS may fund more than 28 days per year if children are at risk of
            going to residential care. NDIS will not fund more than 30 days at a
            time or more than 60 days per year.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            You may be able to get help from the child protection service as
            well as the support through NDIS.
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

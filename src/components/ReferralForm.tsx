"use client";
import { useState } from "react";
import { Typography, Stepper, Step } from "@material-tailwind/react";
import Input from "./custom-components/Input";
import Button from "./custom-components/Button";

export default function ReferralForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 fields
    pName: "",
    pAddress: "",
    pPhone: "",
    ndisNumber: "",
    mgtType: "",
    requiredService: "",
    consent: "",
    // step 2 fields
    name: "",
    orgName: "",
    email: "",
    phone: "",
    relationship: "",
    callBack: "",
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

  const next = () => {
    // step < 2 && setStep(step + 1)
    const requiredStep1Fields = [
      "pName",
      "pAddress",
      "pPhone",
      "ndisNumber",
      "mgtType",
      "requiredService",
      "consent",
    ];

    const isValid = requiredStep1Fields.every(
      (field) => formData[field as keyof typeof formData]?.trim() !== ""
    );

    if (!isValid) {
      alert("Please fill all required Participant Details before continuing.");
      return;
    }

    setStep(2);
  };
  const prev = () => step > 1 && setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredStep2Fields = [
      "name",
      "orgName",
      "pOrg",
      "email",
      "phone",
      "callBack",
      "relationship",
      "message",
    ];

    const isValid = requiredStep2Fields.every(
      (field) => formData[field as keyof typeof formData]?.trim() !== ""
    );

    if (!isValid) {
      alert("Please fill all required fields in Your Details.");
      return;
    }

    const subject = `New Referral Submission from ${formData.name}`;
    const body = `
    Participant Details:
    ---------------------
    Name: ${formData.pName}
    Address: ${formData.pAddress}
    Phone: ${formData.pPhone}
    NDIS Number: ${formData.ndisNumber}
    Plan Management: ${formData.mgtType}
    Required Services: ${formData.requiredService}
    Consent: ${formData.consent}

    Your Details:
    ---------------------
    Name: ${formData.name}
    Organization: ${formData.orgName}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Callback Request: ${formData.callBack}
    Relationship: ${formData.relationship}
    Message: ${formData.message}
    `;

    const mailtoLink = `mailto:chukwuebukaokoye408@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full px-6 pt-5 border-2 rounded-xl border-main-purple h-fit">
      <Typography variant="h3" className="text-black text-center mb-6">
        Referral Form
      </Typography>

      <Stepper activeStep={step - 1} className="mb-10">
        <Step onClick={() => setStep(1)}>
          <div
            className={`${
              step === 1
                ? "!border-main-purple !text-main-purple"
                : step > 1 && "!border !border-white !bg-step-green !text-white"
            } w-5 h-5 p-3 flex items-center justify-center rounded-full bg-white border border-gray-500 text-gray-500`}
          >
            1
          </div>
          <div
            className={`absolute -bottom-[3.5rem] w-max text-center text-gray-500 lg:-ml-5  ${
              step === 1 ? "text-main-purple" : step > 1 && "text-step-green"
            }`}
          >
            <p className=" mx-auto">
              Participant <br className="hidden lg:block" /> Details
            </p>
          </div>
        </Step>
        <Step onClick={() => setStep(2)} className="!bg-transparent">
          <div
            className={`w-5 h-5 p-3 flex items-center justify-center rounded-full bg-white border border-gray-500 text-gray-500 ${
              step === 2 && "!border-main-purple !text-main-purple"
            }`}
          >
            2
          </div>
          <div
            className={`absolute -bottom-[3.5rem]  right-0 w-max text-center text-gray-500 ${
              step === 2 && "text-main-purple"
            }`}
          >
            Your <br className="hidden lg:block" /> Details
          </div>
        </Step>
      </Stepper>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 !mt-12">
            <Input
              type="text"
              name="pName"
              label="Participant Name *"
              required={true}
              value={formData.pName}
              placeholder="Participant Name"
              onChange={handleChange}
            />
            <Input
              label="Participant Address"
              type="text"
              name="pAddress"
              value={formData.pAddress}
              placeholder="Participant Address"
              onChange={handleChange}
            />
            <Input
              label="Participant Contact"
              type="tel"
              name="pPhone"
              required
              placeholder="Mobile/Landline"
              value={formData.pPhone}
              onChange={handleChange}
            />
            <Input
              label="NDIS Number"
              type="text"
              name="ndisNumber"
              placeholder="NDIS Number"
              required
              value={formData.ndisNumber}
              onChange={handleChange}
            />
            <div className="p-2 my-4">
              <label htmlFor="mgtType" className="text-main-purple mb-3">
                Plan Management Type *
              </label>
              <select
                name="mgtType"
                required
                value={formData.mgtType}
                onChange={handleChange}
                className={`flex justify-end space-y-1.5 w-full border-r-0 border-l-0 !border-t-0 border-b-2 border-b-main-purple rounded-2xl bg-white text-black p-3 focus:outline-none`}
              >
                <option value="" disabled>
                  Select Plan Management Type
                </option>
                <option>Self Managed</option>
                <option>Plan Managed</option>
                <option>Agency/NDIS Managed</option>
              </select>
            </div>
            <div className="p-2 my-4">
              <label htmlFor="mgtType" className="text-main-purple mb-3">
                Service[s] Required *
              </label>
              <select
                name="requiredService"
                required
                value={formData.requiredService}
                onChange={handleChange}
                className={`flex justify-end space-y-1.5 w-full border-r-0 border-l-0 !border-t-0 border-b-2 border-b-main-purple rounded-2xl bg-white text-black p-3 focus:outline-none`}
              >
                <option value="" disabled>
                  Select Required Service
                </option>
                <option>Supported Independent Living</option>
                <option>Short Term Accommodation</option>
                <option>Assistance with Daily Living Life Skills</option>
                <option>Assistance with Daily Personal Activities</option>
                <option>Community Participation</option>
                <option>NDIS Support Participation</option>
                <option>Community Nursing</option>
                <option>Psychosocial Recovery Coach</option>
                <option>Household Tasks</option>
              </select>
            </div>
            <div className="p-2 my-4">
              <label htmlFor="mgtType" className="text-main-purple mb-3">
                Consent Obtained ? *
              </label>
              <select
                name="consent"
                required
                value={formData.consent}
                onChange={handleChange}
                className={`flex justify-end space-y-1.5 w-full border-r-0 border-l-0 !border-t-0 border-b-2 border-b-main-purple rounded-2xl bg-white text-black p-3 focus:outline-none`}
              >
                <option value="" disabled>
                  Choose Consent
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="py-8">
            {/* Add fields for step 2 here */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 !mt-12">
              <Input
                type="text"
                name="name"
                label="Your Name *"
                required={true}
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="orgName"
                label="Organization Name *"
                required={true}
                value={formData.orgName}
                placeholder="Organization Name"
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                label="Your Email *"
                required={true}
                value={formData.email}
                placeholder="Your Email Address"
                onChange={handleChange}
              />
              <Input
                type="tel"
                name="phone"
                label="Your Contact Number *"
                required={true}
                value={formData.phone}
                placeholder="Mobile/Landline"
                onChange={handleChange}
              />
              <div className="p-2 my-4">
                <label htmlFor="mgtType" className="text-main-purple mb-3">
                  Call back Request *
                </label>
                <select
                  name="callBack"
                  required
                  value={formData.callBack}
                  onChange={handleChange}
                  className={`flex justify-end space-y-1.5 w-full border-r-0 border-l-0 !border-t-0 border-b-2 border-b-main-purple rounded-2xl bg-white text-black p-3 focus:outline-none`}
                >
                  <option value="" disabled>
                    Select Callback Request
                  </option>
                  <option>Yes, please</option>
                  <option>No, thank you</option>
                </select>
              </div>
              <Input
                type="text"
                name="relationship"
                label="Relationship with the Participant *"
                required={true}
                value={formData.relationship}
                placeholder="Family/Friend/Professional"
                onChange={handleChange}
              />
              <div className="p-2 my-4 col-span-2">
                <label htmlFor="mgtType" className="text-main-purple mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  placeholder="Message"
                  // cols={5}
                  // rows={10}
                  className="w-full text-black focus:outline-none border-b-2 p-3 border-b-main-purple col-span-2 rounded-2xl bg-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-center gap-5 mt-10 mb-5">
          {step > 1 && (
            <>
              <Button
                className="rounded-lg cursor-pointer bg-step-green text-white py-3 px-6 w-full"
                onClick={prev}
              >
                Previous
              </Button>
              <Button
                type="submit"
                className="rounded-lg cursor-pointer bg-main-purple text-white py-3 px-6 w-full"
              >
                Send
              </Button>
            </>
          )}
          {step < 2 && (
            <Button
              onClick={next}
              className="rounded-lg cursor-pointer bg-main-purple text-white py-3 px-6 w-full"
            >
              Next
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

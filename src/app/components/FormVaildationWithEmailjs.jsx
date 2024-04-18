"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const FormVaildationWithEmailjs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    Name: "",
    LastName: "",
    email: "",
    message: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await emailjs.sendForm(
        "service_9dz3n8g",
        "template_krjd38d",
        e.target,
        "a0DnIWbv3ya05XvHJ"
      );
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
    const regex = {
      Name: /^[a-zA-Z\s]+$/,
      LastName: /^[a-zA-Z\s]+$/,
      email:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: /^[a-zA-Z\s]+$/,
    };
    const errors = {};
    if (!regex.Name.test(formData.Name)) {
      errors.Name = "Name is invalid.";
    }
    if (!regex.LastName.test(formData.LastName)) {
      errors.LastName = "Last Name is invalid.";
    }

    if (!regex.email.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!regex.message.test(formData.message)) {
      errors.message = "Message is invalid.";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      Name: "",
      LastName: "",
      email: "",
      message: "",
    });
    setFormErrors({
      Name: "",
      LastName: "",
      email: "",
      message: "",
    });
  };
  return (
    <div>
      <div className=" h-screen flex justify-center items-center">
        <div className="max-w-[1140px] px-3 mx-auto">
          <h2
            data-aos="fade-down"
            className="font-outfit font-semibold text-[34px] sm:text-[42px] md:text-5xl leading-[120%] text-center lg:text-start "
          >
            Form Validation With Email JS
          </h2>

          <form
            onSubmit={handleSubmit}
            className="max-w-[640px] mx-auto  pt-12"
          >
            <div className="sm:flex gap-4 pt-4">
              <div
                data-aos="fade-down"
                className="flex flex-col w-full sm:w-1/2 pt-2 sm:pt-0"
              >
                <label
                  htmlFor="Name"
                  className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 outline-none border border-[#13120033] rounded-lg p-[10px_12px] mt-[5px]"
                />

                {formErrors.Name && (
                  <p className=" font-exo text-sm text-red-500 pt-1">
                    {formErrors.Name}
                  </p>
                )}
              </div>
              <div
                data-aos="fade-down"
                className="flex flex-col w-full sm:w-1/2 pt-2 sm:pt-0"
              >
                <label
                  htmlFor="LastName"
                  className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleChange}
                  className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 outline-none border border-[#13120033] rounded-lg p-[10px_12px] mt-[5px]"
                />

                {formErrors.LastName && (
                  <p className=" font-exo text-sm text-red-500 pt-1">
                    {formErrors.LastName}
                  </p>
                )}
              </div>
            </div>

            <div data-aos="fade-down" className="flex flex-col w-full pt-2">
              <label
                htmlFor="email"
                className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 "
              >
                Email
              </label>
              <input
                type="mail"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 outline-none border border-[#13120033] rounded-lg p-[10px_12px] mt-[5px]"
              />
              {formErrors.email && (
                <p className=" font-exo text-sm text-red-500 pt-1">
                  {formErrors.email}
                </p>
              )}
            </div>
            <div data-aos="fade-down" className="flex flex-col w-full pt-2">
              <label
                htmlFor="Message"
                className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 "
              >
                Message
              </label>
              <textarea
                type="message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 outline-none border border-[#13120033] rounded-lg p-[10px_12px] mt-[5px] min-h-[135px]"
              ></textarea>
              {formErrors.message && (
                <p className=" font-exo text-sm text-red-500 pt-1">
                  {formErrors.message}
                </p>
              )}
            </div>

            <div data-aos="fade-down" className="pt-6 sm:pt-10 md:pt-12">
              <button className="font-outfit font-semibold text-sm sm:text-base leading-[150%] LinearBlue text-white p-[14px_24px] rounded">
                Submit
              </button>
            </div>
          </form>
          {showSuccessPopup && (
            <div className=" bg-white border border-[#131200] rounded-lg p-[10px_12px] max-w-[300px] pt-4 ">
              <p className="font-exo font-normal text-base leading-[150%]">
                Form submitted successfully!
              </p>
              <button
                onClick={handlePopupClose}
                className="font-exo font-normal text-base leading-[150%] text-white bg-blue-700 py-2 px-3 rounded-md  mt-3"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormVaildationWithEmailjs;

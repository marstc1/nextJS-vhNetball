"use client"; // Add this directive at the top of the file

import { useState } from "react";
import Image from "next/image";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    primaryContact: { name: "", phone: "", email: "" },
    secondaryContact: { name: "", phone: "", email: "" },
    playType: "",
    umpireName: "",
    playoffMusic: "",
  });

  const [errors, setErrors] = useState({
    teamName: false,
    primaryContact: { name: false, phone: false, email: false },
    secondaryContact: { name: false, phone: false, email: false },
    playType: false,
    umpireName: false,
    playoffMusic: false,
  });

  const validateForm = () => {
    const newErrors = {
      teamName: formData.teamName === "",
      primaryContact: {
        name: formData.primaryContact.name === "",
        phone: formData.primaryContact.phone === "",
        email: formData.primaryContact.email === "",
      },
      secondaryContact: {
        name: formData.secondaryContact.name === "",
        phone: formData.secondaryContact.phone === "",
        email: formData.secondaryContact.email === "",
      },
      playType: formData.playType === "",
      umpireName: formData.umpireName === "",
      playoffMusic: formData.playoffMusic === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(
      (error) => error === true || Object.values(error).some((e) => e === true)
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNestedInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    contactType: "primaryContact" | "secondaryContact",
    field: "name" | "phone" | "email"
  ) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [contactType]: {
        ...prevState[contactType],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log(formData);
    }
  };

  return (
    <form className="space-y-2 mx-auto" onSubmit={handleSubmit}>
      <div>
        <label className="block">Team Name</label>
        <input
          type="text"
          name="teamName"
          className={`bg-white mt-1 px-4 block w-full h-12 border ${
            errors.teamName ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm`}
          required
          value={formData.teamName}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label className="block">Playoff Music</label>
        <input
          type="text"
          name="playoffMusic"
          className={`bg-white mt-1 px-4 block w-full h-12 border ${
            errors.playoffMusic ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm`}
          required
          value={formData.playoffMusic}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label className="block">How would you like to play</label>
        <select
          name="playType"
          className={`bg-white mt-1 px-4 block w-full h-12 border ${
            errors.playType ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm`}
          required
          value={formData.playType}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="competitive-womens">Competitive - Womens</option>
          <option value="competitive-mixed">Competitive - Mixed</option>
          <option value="just-for-fun">Just for fun!</option>
        </select>
      </div>

      <div>
        <label className="block">Umpire Name</label>
        <input
          type="text"
          name="umpireName"
          className={`mt-1 px-4 block w-full h-12 border ${
            errors.umpireName ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm`}
          required
          value={formData.umpireName}
          onChange={handleInputChange}
        />
      </div>

      <div className="pt-10">
        <h3 className="text-lg font-semibold">Primary Contact</h3>
        <div className="mt-2">
          <label className="block">Name</label>
          <input
            type="text"
            className={`mt-1 px-4 block w-full h-12 border ${
              errors.primaryContact.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm`}
            required
            value={formData.primaryContact.name}
            onChange={(e) =>
              handleNestedInputChange(e, "primaryContact", "name")
            }
          />
        </div>

        <div className="mt-2">
          <label className="block">Telephone Number</label>
          <input
            type="tel"
            className={`mt-1 px-4 block w-full h-12 border ${
              errors.primaryContact.phone ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm`}
            required
            value={formData.primaryContact.phone}
            onChange={(e) =>
              handleNestedInputChange(e, "primaryContact", "phone")
            }
          />
        </div>

        <div className="mt-2">
          <label className="block">Email Address</label>
          <input
            type="email"
            className={`mt-1 px-4 block w-full h-12 border ${
              errors.primaryContact.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm`}
            required
            value={formData.primaryContact.email}
            onChange={(e) =>
              handleNestedInputChange(e, "primaryContact", "email")
            }
          />
        </div>
      </div>

      <div className="pt-10">
        <h3 className="text-lg font-semibold">Secondary Contact</h3>
        <div className="mt-2">
          <label className="block">Name</label>
          <input
            type="text"
            className={`mt-1 px-4 block w-full h-12 border ${
              errors.secondaryContact.name
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md shadow-sm`}
            required
            value={formData.secondaryContact.name}
            onChange={(e) =>
              handleNestedInputChange(e, "secondaryContact", "name")
            }
          />
        </div>

        <div className="mt-2">
          <label className="block">Telephone Number</label>
          <input
            type="tel"
            className={`mt-1 px-4 block w-full h-12 border ${
              errors.secondaryContact.phone
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md shadow-sm`}
            required
            value={formData.secondaryContact.phone}
            onChange={(e) =>
              handleNestedInputChange(e, "secondaryContact", "phone")
            }
          />
        </div>

        <div className="mt-2">
          <label className="block">Email Address</label>
          <input
            type="email"
            className={`mt-1 px-4 block w-full h-12 border ${
              errors.secondaryContact.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md shadow-sm`}
            required
            value={formData.secondaryContact.email}
            onChange={(e) =>
              handleNestedInputChange(e, "secondaryContact", "email")
            }
          />
        </div>
      </div>

      <div className="flex justify-center py-8">
        <div className="relative inline-block">
          <button className="bg-indigo-950 text-white text-lg py-3 px-12 rounded-full hover:shadow-md">
            Register and pay
          </button>
          <Image
            className="absolute top-1 transform -translate-y-1/2 translate-x-1/2 -rotate-12 w-8 h-8 shadow-lg"
            src="/butterfly-logo.png"
            alt=""
            role="presentation"
            width={30}
            height={53}
          />
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;

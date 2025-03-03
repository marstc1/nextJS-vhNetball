"use client"; // Add this directive at the top of the file

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaInfoCircle } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import PaymentGuide from "./PaymentGuide";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    playoffMusic: "",
    playType: "",
    umpireName: "",
    primaryContact: { name: "", phone: "", email: "" },
    secondaryContact: { name: "", phone: "", email: "" },
  });

  const [errors, setErrors] = useState({
    teamName: false,
    playType: false,
    umpireName: false,
    primaryContact: { name: false, phone: false, email: false },
    secondaryContact: { name: false, phone: false, email: false },
  });

  const [isFun, setIsFun] = useState<boolean>(false);

  const [isRegistrationFormSubmitted, setIsRegistrationFormSubmitted] =
    useState<boolean>(false);

  const paymentFormRef = useRef<HTMLDivElement>(null);

  const validateForm = () => {
    const newErrors = {
      teamName: formData.teamName === "",
      playType: formData.playType === "",
      umpireName:
        formData.playType.includes("competitive") && formData.umpireName === "",
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

    // Set isFun based on playType
    if (name === "playType") {
      setIsFun(value === "just-for-fun");
    }
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

  const handleRegistrationSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (validateForm()) {
      const formData = new FormData(event.currentTarget);

      const entries: [string, FormDataEntryValue][] = Array.from(
        formData.entries()
      );
      const params = new URLSearchParams();

      entries.forEach(([key, value]) => {
        params.append(key, value.toString());
      });

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (response.ok) {
        console.log("Form successfully submitted");
        setIsRegistrationFormSubmitted(true);
      } else {
        console.error("Form submission error", response.statusText);
      }
    }
  };

  useEffect(() => {
    if (isRegistrationFormSubmitted && paymentFormRef.current) {
      paymentFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isRegistrationFormSubmitted]);

  return (
    <div>
      {!isRegistrationFormSubmitted ? (
        <div>
          <h2 className="text-2xl font-semibold my-6">Step 1 of 2: Register</h2>

          <div>
            <form
              data-netlify="true"
              name="registration-form-2025"
              className="space-y-2 mx-auto"
              onSubmit={handleRegistrationSubmit}
            >
              <div className="grid md:grid-cols-2 gap-2 md:gap-x-6 md:gap-y-4">
                <input
                  type="hidden"
                  name="form-name"
                  value="registration-form-2025"
                />
                <div>
                  <label className="block">Team name</label>
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
                  <label className="block">Playoff music (optional)</label>
                  <input
                    type="text"
                    name="playoffMusic"
                    className={`bg-white mt-1 px-4 block w-full h-12 border border-gray-300 rounded-md shadow-sm`}
                    value={formData.playoffMusic}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block">Tounament</label>
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
                    <option value="just-for-fun">Fun</option>
                    <option value="competitive-womens">
                      Womens Competitive
                    </option>
                  </select>
                </div>

                {/* Conditionally render Umpire Name field */}
                {formData.playType.includes("competitive") && (
                  <div>
                    <label className="flex items-center">
                      Umpire name
                      <FaInfoCircle
                        data-tooltip-id="umpire-tooltip"
                        className="ml-2 text-sky-600 cursor-pointer"
                      />
                      <ReactTooltip
                        id="umpire-tooltip"
                        place="bottom"
                        style={{ width: "350px" }}
                      >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <span className="font-semibold">
                            Competitive teams are required to provide a C award
                            umpire.
                          </span>
                          <br />
                          <span className="text-xs">
                            We may accept experienced beginners working towards
                            their C award, depending on the number of
                            experienced umpires we have.
                          </span>
                        </div>
                      </ReactTooltip>
                    </label>
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
                )}
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="pt-10">
                  <h3 className="text-lg font-semibold">Primary contact</h3>
                  <div className="mt-2">
                    <label className="block">Name</label>
                    <input
                      type="text"
                      className={`mt-1 px-4 block w-full h-12 border ${
                        errors.primaryContact.name
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm`}
                      required
                      value={formData.primaryContact.name}
                      onChange={(e) =>
                        handleNestedInputChange(e, "primaryContact", "name")
                      }
                    />
                  </div>

                  <div className="mt-2">
                    <label className="block">Telephone number</label>
                    <input
                      type="tel"
                      className={`mt-1 px-4 block w-full h-12 border ${
                        errors.primaryContact.phone
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm`}
                      required
                      value={formData.primaryContact.phone}
                      onChange={(e) =>
                        handleNestedInputChange(e, "primaryContact", "phone")
                      }
                    />
                  </div>

                  <div className="mt-2">
                    <label className="block">Email address</label>
                    <input
                      type="email"
                      className={`mt-1 px-4 block w-full h-12 border ${
                        errors.primaryContact.email
                          ? "border-red-500"
                          : "border-gray-300"
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
                  <h3 className="text-lg font-semibold">Secondary contact</h3>
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
                    <label className="block">Telephone number</label>
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
                    <label className="block">Email address</label>
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
              </div>

              <div className="pt-6">
                <p className="text-sm font-bold mb-1">
                  Please make your payment within 48 hours of registration.
                </p>
                <p className="text-xs">
                  Your entry is only confirmed upon reciept of payment.
                  Don&apos;t delay, as places are limited.
                </p>
              </div>

              <div className="pt-6">
                <div className="relative inline-block">
                  <button className="bg-indigo-950 text-white text-lg py-3 px-12 rounded-full hover:shadow-md">
                    Register
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

              <div className="pb-6 text-sm">
                <p className="mt-8 mb-1">
                  <strong>Already registered?</strong>
                </p>
                <p className="text-xs">
                  Visit one of the following SumUp payment pages to submit your
                  entry fee:
                </p>
                <ul className="list-disc text-xs ml-6">
                  <li className="my-1">
                    <a
                      className="underline underline-offset-4"
                      href="https://pay.sumup.com/b2c/QR8DR8IH"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fun Tournament
                    </a>{" "}
                    - £60
                  </li>
                  <li className="my1">
                    <a
                      className="underline underline-offset-4"
                      href="https://pay.sumup.com/b2c/Q4MEGPHH"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Competitive Tournament
                    </a>{" "}
                    - £70
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div ref={paymentFormRef}>
          <PaymentGuide isFun={isFun} />
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;

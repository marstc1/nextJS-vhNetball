import { DM_Serif_Text } from "next/font/google";
import React from "react";
import Image from "next/image";

const dmSerifFont = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <section id="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1 className="font-bold mb-6">
            <span className={`${dmSerifFont.className} text-2xl block`}>
              The annual
            </span>
            <span className={`${dmSerifFont.className} text-7xl block`}>
              Victoria <br />
              Hawkins
            </span>
            <span className={`${dmSerifFont.className} text-3xl block py-1`}>
              Charity Netball Event
            </span>
          </h1>

          <div className="mt-12">
            <p className="mb-3">
              Exciting news! Join us for this year's netball tournament on{" "}
              <b>Saturday, 24th June 2025</b> at City Academy.
            </p>
            <p className="mb-3">
              Following the success of previous years, we're thrilled to host
              both women's and mixed competitive tournaments. Check the{" "}
              <a className="underline underline-offset-4" href="#event-info">
                'About the Event'
              </a>{" "}
              section for all the details.
            </p>
            <p className="mb-3">
              Register your team today, places fill up quickly! Can't wait to
              see you there!
            </p>
          </div>
        </div>

        <div className="flex place-items-end">
          <div className="bg-white px-6 py-4 md:mx-20 md:ml-24 md:mr-0 rounded shadow-sm">
            <table className="min-w-full">
              <tbody>
                <tr className="border-b-2">
                  <td className="align-top py-3 font-semibold w-2/3">Date</td>
                  <td className="align-top py-3">29/06/2025</td>
                </tr>
                <tr className="border-b-2">
                  <td className="align-top py-3 font-semibold">
                    Closing Date for Entries
                    <span className="text-sm block">
                      (unless filled earlier)
                    </span>
                  </td>
                  <td className="align-top py-3">03/06/2025</td>
                </tr>
                <tr className="border-b-2">
                  <td className="align-top py-3 font-semibold">Location</td>
                  <td className="align-top py-3">
                    City Academy, Norwich, NR4 7LP
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td className="align-top py-3 font-semibold">
                    Cost per team
                  </td>
                  <td className="align-top py-3">£50</td>
                </tr>
                <tr>
                  <td className="align-top py-3 font-semibold">Minimum Age</td>
                  <td className="align-top py-3">16+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="relative inline-block">
          <a
            href="#registration-form"
            className="bg-indigo-950 text-white text-lg py-4 px-12 rounded-full hover:shadow-md"
          >
            Register and pay
            <Image
              className="absolute -top-2 right-8 transform -translate-y-1/2 translate-x-1/2 rotate-12 w-8 h-8 shadow-lg"
              src="/butterfly-logo.png"
              alt=""
              role="presentation"
              width={30}
              height={53}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

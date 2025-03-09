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
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="font-bold mb-6">
            <span className={`${dmSerifFont.className} text-2xl block`}>
              The
            </span>
            <span className={`${dmSerifFont.className} text-7xl block`}>
              Victoria <br />
              Hawkins
            </span>
            <span className={`${dmSerifFont.className} text-3xl block py-1`}>
              10th Memorial Netball Tournament
            </span>
          </h1>

          <div className="md:hidden w-full">
            <Image
              src="/hero.png"
              width={1024}
              height={1124}
              alt=""
              className="w-full max-w-96 pb-8 m-auto"
            />
          </div>

          <div className="sm:my-10">
            <p className="mb-4">Hey everyone,</p>
            <p className="mb-4">
              We&apos;re back with our annual netball tournament on{" "}
              <b>Saturday, 28th June 2025</b>, at City Academy, and we&apos;d
              love to see you there!
            </p>
            <p className="mb-4">
              This year, we&apos;re continuing with both the fun and
              women&apos;s competitive tournaments. You can find all the details
              in the{" "}
              <a className="underline underline-offset-4" href="#event-info">
                &apos;About the Event&apos;
              </a>{" "}
              section below.
            </p>
            <p className="mb-4">
              <b>
                The fun tournament and the women&apos;s competitive tournament
                are now fully booked.
              </b>{" "}
              Registrations for this year&apos;s event are officially closed.
            </p>
          </div>
          {/* <div className="py-8">
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
          </div> */}
        </div>

        <div className="hidden w-full md:w-1/2 md:flex md:items-end">
          <Image
            src="/hero.png"
            width={1024}
            height={1124}
            alt=""
            className="w-full max-w-96 ml-auto pb-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

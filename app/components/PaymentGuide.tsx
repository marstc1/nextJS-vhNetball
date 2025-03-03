import React from "react";
import Image from "next/image";

interface PaymentGuideProps {
  isFun: boolean;
}

const PaymentGuide: React.FC<PaymentGuideProps> = ({ isFun }) => {
  return (
    <div className="mx-auto">
      <div className="sm:flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold my-2">Step 2 of 2: Payment</h2>
        <Image
          className="hidden sm:block mt-2"
          width={204}
          height={72}
          src="/sumup-logo.png"
          alt="SumUp"
        />
      </div>

      <div className="my-8 text-7xl font-bold text-center sm:text-left">
        {isFun ? <span>£60</span> : <span>£70</span>}
      </div>

      <p className="my-4 mt-8 text-sm">
        This year we’ve teamed up with <b>sumup</b> to process our payments. It
        is super easy, visit our sumup payment page by clicking the Pay button
        below.
      </p>

      <p className="my-4 mb-8 text-sm">
        <span className="font-semibold">
          Please make your payment within the next 48 hours.
        </span>{" "}
        Your entry is only confirmed upon receipt of payment. Don&apos;t delay,
        as places are limited.
      </p>

      {isFun ? (
        <div className="relative inline-block my-2">
          <a
            className="bg-indigo-950 text-white text-lg py-4 px-12 rounded-full hover:shadow-md"
            href="https://pay.sumup.com/b2c/QR8DR8IH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pay
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
      ) : (
        <div className="relative inline-block">
          <a
            className="bg-indigo-950 text-white text-lg py-4 px-12 rounded-full hover:shadow-md"
            href="https://pay.sumup.com/b2c/Q4MEGPHH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pay
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
      )}

      {isFun ? (
        <div className="hidden md:block my-8 max-w-xl mx-auto">
          <Image
            className="mx-auto"
            width={700}
            height={580}
            src="/sumup-QRCode-Fun.png"
            alt="SumUp QR Code"
          />
        </div>
      ) : (
        <div className="hidden md:block my-8">
          <Image
            className="mx-auto"
            width={700}
            height={580}
            src="/sumup-QRCode-Competitive.png"
            alt="SumUp QR Code"
          />
        </div>
      )}

      <h3 className="text-lg font-semibold my-2 mt-8">Need Help?</h3>
      <p className="mb-4 text-sm">
        If you have any problems with the payment process, don’t hesitate to
        reach out to our{" "}
        <a
          className="underline underline-offset-4"
          href="mailto:victoriahawkinsnetball@gmail.com?subject=Payment%20Question"
        >
          friendly support team
        </a>
        .
      </p>
    </div>
  );
};

export default PaymentGuide;

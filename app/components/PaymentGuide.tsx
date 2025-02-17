import React from "react";
import Image from "next/image";

const PaymentGuide = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-2xl font-semibold my-8">Step 2 of 2: Payment</h2>

      <p className="my-4">
        This year we’ve teamed up with <b>SumUp</b> to process our payments for
        the event.
      </p>

      <Image
        className="my-6"
        width={204}
        height={72}
        src="/sumup-logo.png"
        alt="SumUp"
      />

      <p className="font-semibold my-6">
        Please make your payment within the next 48 hours. Your entry is only
        confirmed upon reciept of payment. Don't delay, as places are limited.
      </p>

      <p className="my-6">
        It is super easy, visit our SumUp payment page
        <span className="hidden md:inline"> or scan the QR code below</span> to
        submit your £50 entry fee.
      </p>

      <div className="hidden md:block">
        <Image
          className="mx-auto"
          width={350}
          height={290}
          src="/sumup-QRCode.png"
          alt="SumUp QR Code"
        />
      </div>

      <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
      <p className="mb-4">
        If you have any problems with the payment process, don’t hesitate to reach
        out to our <a className="underline underline-offset-4" href="mailto:victoriahawkinsnetball@gmail.com?subject=Payment%20Question">friendly support team</a>.
      </p>
    </div>
  );
};

export default PaymentGuide;

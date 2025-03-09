import React from "react";

const RegistrationClosed = () => {
  return (
    <div className="mx-auto">
      <div className="mb-8">
        <p className="my-4">
          <b>
            The fun tournament and the women&apos;s competitive tournament are
            now fully booked.
          </b>{" "}
          Registrations for this year&apos;s event are officially closed.
        </p>

        <div className="py-2 text-sm">
          <p className="my-1">
            <strong>Already registered?</strong>
          </p>
          <p className="text-xs">
            Visit one of the following SumUp payment pages to submit your entry
            fee:
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
      </div>
    </div>
  );
};

export default RegistrationClosed;

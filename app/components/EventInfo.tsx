import React from "react";
import Image from "next/image";

const EventInfo = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">About the Event</h2>

      <h3 className="text-xl font-semibold mb-2">Key Information:</h3>
      <div className="container mx-auto p-1 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Date:</strong>
            </p>
            <p>28/06/2025</p>
          </div>
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Entry cutoff:</strong>
            </p>
            <p>11/04/2025</p>
            <p>unless filled earlier</p>
          </div>
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Location:</strong>
            </p>
            <p>City Academy, Norwich, NR4 7LP</p>
          </div>
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Cost per team:</strong>
            </p>
            <p>Fun - £60</p>
            <p>Competitive - £70</p>
          </div>
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Minimum age:</strong>
            </p>
            <p>16+</p>
          </div>
        </div>
      </div>

      <div className="sm:flex my-8 pb-8">
        <div className="sm:w-1/2 px-2 sm:pr-4 pb-8 sm:pb-0">
          <h3 className="text-xl font-semibold mb-4">Morning Session:</h3>
          <ul className="my-4 list-disc list-inside text-gray-700">
            <li>Registration: 9:15am</li>
            <li>Briefing: 9:30am</li>
            <li>Start: 9:45am</li>
            <li>Finish: 12:30pm</li>
          </ul>

          <h4 className="font-semibold mt-8">
            Fun
            <br />
            Tournament:
          </h4>

          <Image
            className="rounded w-full my-4"
            src="/2018_7.jpg"
            alt=""
            role="presentation"
            width={472}
            height={315}
          />

          <p className="my-4">
            Friendly but competitive, ideal for those who don’t usually play.
            Mixed teams are welcome, with up to three affiliated netball players
            (only two on court at a time).
          </p>

          <div className="mt-10">
            <span className="font-semibold">
              No umpire required
            </span>
            <br />
            <span className="text-xs">
              However, if you have someone who would like to help then to please
              email{" "}
              <a
                className="underline underline-offset-4"
                href="mailto:victoriahawkinsnetball@gmail.com?subject=Umpire%20Help"
              >
                victoriahawkinsnetball@gmail.com
              </a>
              .
            </span>
          </div>
        </div>

        <div className="sm:w-1/2 pt-8 sm:pt-0 px-2 sm:pl-4 border-t-2 sm:border-t-0 sm:border-l-2 border-dotted border-violet-200">
          <h3 className="text-xl font-semibold mb-4">Afternoon Session:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Registration: 11:35am</li>
            <li>Briefing: 11:50am</li>
            <li>Start: 12:15pm</li>
            <li>Finish: 4:15pm</li>
          </ul>

          <h4 className="font-semibold mt-8">
            Women’s Competitive
            <br />
            Tournament:
          </h4>
          <Image
            className="rounded w-full my-4"
            src="/2018_1.jpg"
            alt=""
            role="presentation"
            width={472}
            height={315}
          />
          <p>
            Affiliated women players in competitive teams. Teams grouped by
            similar divisions, with semis and finals if enough teams join.
          </p>

          <div className="mt-10">
            <span className="font-semibold">
              Umpire required
            </span>
            <br />
            <span className="text-xs">
              Each team entering into the competitive tournament must provide a C award non playing umpire.
            </span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">Event Highlights:</h3>
      <div className="container mx-auto p-1">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:text-center">
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>BBQ</strong>
            </p>
            <p>Veggie options included!</p>
          </div>
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Raffle Extravaganza</strong>
            </p>
          </div>
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Silent Auction</strong>
            </p>
          </div>
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Cake Stall</strong>
            </p>
            <p>Vegan goodies too!</p>
          </div>
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Family and friends are welcome!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;

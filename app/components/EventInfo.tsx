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
              <strong>Entry Cutoff:</strong>
            </p>
            <p>09/06/2025</p>
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
              <strong>Cost:</strong>
            </p>
            <p>£50 per team</p>
          </div>
          <div className="bg-violet-50 rounded p-4">
            <p>
              <strong>Minimum Age:</strong>
            </p>
            <p>16+</p>
          </div>
        </div>
      </div>

      <div className="sm:flex my-8 pb-8">
        <div className="sm:w-1/3 px-2 sm:pr-4">
          <h3 className="text-xl font-semibold mb-4">Morning Session:</h3>
          <ul className="my-4 list-disc list-inside text-gray-700">
            <li>Registration: 9:15am</li>
            <li>Briefing: 9:30am</li>
            <li>Start: 9:45am</li>
            <li>Finish: 12:30pm</li>
          </ul>

          <h4 className="font-semibold mt-8">
            Casual Champs
            <br />
            Tournament:
          </h4>
          <Image
            className="rounded w-full my-4"
            src="/2018_7.jpg"
            alt=""
            role="presentation"
            width={320}
            height={214}
          />
          <p className="my-4">
            Friendly but competitive, ideal for those who don’t usually play.
            Mixed teams are welcome, with up to three affiliated netballers
            (only two on court at a time).
          </p>
        </div>

        <div className="sm:w-2/3 px-2 sm:px-4 py-4 sm:py-0 border-t-2 sm:border-t-0 sm:border-l-2 border-dotted border-violet-200">
          <h3 className="text-xl font-semibold mb-4">Afternoon Session:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Registration: 11:35am</li>
            <li>Briefing: 11:50am</li>
            <li>Start: 12:15pm</li>
            <li>Finish: 4:15pm</li>
          </ul>

          <div className="sm:flex">
            <div className="sm:w-1/2 sm:pr-2">
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
                width={320}
                height={214}
              />
              <p>
                Affiliated women players in competitive teams. Teams grouped by
                similar divisions, with semis and finals if enough teams join.
              </p>
            </div>
            <div className="sm:w-1/2 sm:pl-2">
              <h4 className="font-semibold mt-8">
                Mixed Competitive
                <br />
                Tournament:
              </h4>
              <Image
                className="rounded w-full my-4"
                src="/4.jpg"
                alt=""
                role="presentation"
                width={320}
                height={214}
              />
              <p className="my-4">
                Mixed teams follow EN mixed team rules. Max three non-female
                players on court, with specific group rules.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <span className="font-semibold">
              Each team is required to provide a C award umpire.
            </span>
            <br />
            <span className="text-xs">
              We may accept experienced beginners working towards their C award,
              depending on the number of experienced umpires we have.
            </span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">Event Highlights:</h3>
      <div className="container mx-auto p-1">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
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

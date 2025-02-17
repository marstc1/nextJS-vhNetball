import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";
import RegistrationForm from "./components/RegistrationForm";

const dmSerifFont = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <div className="bg-white text-indigo-950">
        <header className="bg-white py-5 container mx-auto max-w-screen-lg px-4">
          <div className="container mx-auto">
            <Image
              src="/butterfly-logo.png"
              alt=""
              role="presentation"
              width={60}
              height={46}
            />
          </div>
        </header>
      </div>

      <div className="bg-violet-100 text-indigo-950">
        <main className="container mx-auto py-10 max-w-screen-lg px-4">
          <section id="hero">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h1 className="font-bold mb-6">
                  <span className={`${dmSerifFont.className} text-2xl block`}>
                    The annual
                  </span>
                  <span className={`${dmSerifFont.className} text-7xl block`}>
                    Victoria <br />
                    Hawkins
                  </span>
                  <span
                    className={`${dmSerifFont.className} text-3xl block py-1`}
                  >
                    Charity Netball Event
                  </span>
                </h1>

                <div className="mt-12">
                  <p className="mb-3">
                    Exciting news! Join us for this year's netball tournament on{" "}
                    <b>Saturday, 24th June 2025</b> at City Academy.
                  </p>
                  <p className="mb-3">
                    Following the success of previous years, we're thrilled to
                    host both women's and mixed competitive tournaments. Check
                    the 'About the Event' section for all the details.
                  </p>
                  <p className="mb-3">
                    Register your team today, places fill up quickly! Can't wait
                    to see you there!
                  </p>
                </div>
              </div>

              <div className="flex place-items-end">
                <div className="bg-white px-6 py-4 md:mx-20 lg:ml-24 lg:mr-0 rounded shadow-sm">
                  <h2 className="text-2xl font-semibold mb-5 hidden">
                    Key Information
                  </h2>

                  <table className="min-w-full">
                    <tbody>
                      <tr className="border-b-2">
                        <td className="align-top py-3 font-semibold w-2/3">
                          Date
                        </td>
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
                        <td className="align-top py-3 font-semibold">
                          Location
                        </td>
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
                        <td className="align-top py-3 font-semibold">
                          Minimum Age
                        </td>
                        <td className="align-top py-3">16+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8 mb-6">
                <div className="relative inline-block">
                  <button className="bg-indigo-950 text-white text-lg py-3 px-12 rounded-full hover:shadow-md">
                    Register and pay
                  </button>
                  <Image
                    className="absolute top-1 right-8 transform -translate-y-1/2 translate-x-1/2 rotate-12 w-8 h-8 shadow-lg"
                    src="/butterfly-logo.png"
                    alt=""
                    role="presentation"
                    width={30}
                    height={53}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="bg-white text-indigo-950">
        <section
          id="event-info"
          className="container mx-auto max-w-screen-lg px-4 py-16"
        >
          <h2 className="text-3xl font-bold mb-8">About the Event</h2>

          <div className="flex my-8">
            <div className="w-1/3 pl-2 pr-4">
              <h3 className="text-xl font-semibold mb-4">Morning Session:</h3>
              <ul className="my-4 list-disc list-inside text-gray-700">
                <li>Registration: 9:15am</li>
                <li>Briefing: 9:30am</li>
                <li>Start: 9:45am</li>
                <li>Finish: 12:30pm</li>
              </ul>

              <h4 className="font-semibold my-4">Casual Champs Tournament:</h4>
              <Image
                className="rounded w-full my-4"
                src="/2018_7.jpg"
                alt=""
                role="presentation"
                width={320}
                height={214}
              />
              <p className="my-4">
                Friendly but competitive, ideal for those who don’t usually
                play. Mixed teams are welcome, with up to three affiliated netballers
                (only two on court at a time).
              </p>
            </div>

            <div className="w-2/3 px-4 border-l-2 border-dotted border-violet-200">
              <h3 className="text-xl font-semibold mb-4">Afternoon Session:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Registration: 11:35am</li>
                <li>Briefing: 11:50am</li>
                <li>Start: 12:15pm</li>
                <li>Finish: 4:15pm</li>
              </ul>

              <div className="flex">
                <div className="w-1/2 pr-2">
                  <h4 className="font-semibold my-4">
                    Women’s Competitive Tournament:
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
                    Affiliated women players in competitive teams. Teams grouped
                    by similar divisions, with semis and finals if enough teams
                    join.
                  </p>
                </div>
                <div className="w-1/2 pl-2">
                  <h4 className="font-semibold my-4">
                    Mixed Competitive Tournament:
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
                <span className="font-semibold">Each team is required to provide a C award umpire.</span>
                <br />
                <span className="text-xs">
                  We may accept experienced beginners working towards their C
                  award, depending on the number of experienced umpires we have.
                </span>
              </div>
            </div>
          </div>

          <div className=" bg-violet-50 container mx-auto max-w-screen-lg p-8 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Event Highlights:</h3>
            <p className="text-gray-700 my-2">
              We’ll have a BBQ with vegetarian options, raffle, silent auction,
              and a cake stall including vegan options.
            </p>
            <p>
              Family and friends are welcome to join and support Nelson's
              Journey.
            </p>
          </div>
        </section>
      </div>

      <div className="relative bg-gradient-to-t from-white to-violet-50 top-16">
        <div className="relative container mx-auto max-w-screen-lg -top-16">
          <section
            id="registration-form"
            className="px-8 mx-auto py-4 md:w-1/2 my-10 border-2 border-neutral-300 bg-neutral-50 text-indigo-950 rounded-md shadow-lg"
          >
            <h2 className="text-2xl text-center font-semibold m-8">
              Register and pay
            </h2>
            <RegistrationForm />
          </section>
        </div>
      </div>

      <div className="bg-violet-50 text-indigo-950">
        <div className="container mx-auto py-8 max-w-screen-lg px-4 pt-20 pb-14">
          <section id="about-victoria" className="text-sm">
            <div className="container mx-auto flex items-center justify-center">
              <div className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <Image
                    src="/victoria.jpg"
                    width={200}
                    height={600}
                    alt="Victoria"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-1/2 p-8">
                  <h2 className="text-2xl font-semibold mb-8 text-center">
                    In Memory of Victoria Hawkins
                  </h2>
                  <p className="mb-6">
                    Victoria worked in the Accident and Emergency unit at
                    Norfolk and Norwich hospital and was diagnosed with
                    cardiomyopathy. Despite years of care, she was declared
                    stable for her family's dream holiday to Florida.
                    Tragically, she passed away from Viral Myocarditis on 31
                    October 2014 during that trip.
                  </p>
                  <p className="mb-6">
                    After Vicky's sudden death, I organized a netball tournament
                    in her memory. I was amazed by the positive response and
                    love that people now eagerly anticipate this event every
                    year.
                  </p>
                  <p className="mb-6">
                    Our annual netball tournament celebrates Victoria Hawkins, a
                    remarkable netballer known in the community for her time
                    with McCarthy Stars and Panthers. The event also raises
                    funds for Nelson's Journey, a charity close to our hearts.
                  </p>
                  <p className="mb-6">
                    Nelson's Journey has been a tremendous support to Victoria’s
                    husband, Mark, and their children, Izzy and Max. Their
                    services are invaluable, and it’s an honor to assist them by
                    having them participate in our day.
                  </p>
                  <p className="mt-8">
                    We hope you can join us in celebrating Vicky's memory.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-slate-950 text-xs text-white py-4">
        <div className="container mx-auto">
          <p className="text-center">
            © {new Date().getFullYear()} Victoria's Charity Netball Event
          </p>
        </div>
      </footer>
    </>
  );
}

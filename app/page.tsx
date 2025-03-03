import Image from "next/image";
import RegistrationForm from "./components/RegistrationForm";
import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";

export default function Home() {
  return (
    <>
      <div className="bg-violet-100 text-indigo-950">
        <main className="container mx-auto max-w-screen-lg px-4 py-4 md:py-10">
          <Hero />
        </main>
      </div>

      <a id="event-info" />
      <div className="bg-white text-indigo-950">
        <div className="container mx-auto max-w-screen-lg px-4 py-16">
          <EventInfo />
        </div>
      </div>

      <a id="registration-form" />
      <div className="text-indigo-950 bg-gradient-to-t from-white to-violet-50 pb-1">
        <div className="container mx-auto max-w-screen-lg px-4 py-6">
          <h2 className="text-3xl font-bold pt-8">Register and Pay</h2>
          
          <section className="lg:mx-16 my-10 px-8 py-4 border-2 border-neutral-300 bg-neutral-50 text-indigo-950 rounded-md shadow-lg">
            <RegistrationForm />
          </section>
        </div>
      </div>

      <div className="bg-violet-50 text-indigo-950">
        <div className="container mx-auto max-w-screen-lg px-4 py-16">
          <section id="about-victoria">
            <div className="relative shadow-lg rounded-lg bg-white overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <Image
                  src="/victoria.jpg"
                  width={496}
                  height={660}
                  alt="Victoria"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 text-sm">
                <h2 className="text-2xl font-semibold mb-8 text-center">
                  In Memory of Victoria Hawkins
                </h2>
                <p className="mb-6">
                  Victoria worked in the Accident and Emergency unit at Norfolk
                  and Norwich hospital and was diagnosed with cardiomyopathy.
                  Despite years of care, she was declared stable for her
                  family&apos;s dream holiday to Florida. Tragically, she passed
                  away from Viral Myocarditis on 31 October 2014 during that
                  trip.
                </p>
                <p className="mb-6">
                  After Vicky&apos;s sudden death, I organized a netball
                  tournament in her memory. After the amazing support we
                  received after the 1st year, the tournament has become an
                  annual event. Now on its 10th year, we have raised over
                  £29,900 for Nelson’s Journey. There services are invaluable,
                  and it’s an honour to assist them by raising as much as we can
                  at the tournament.
                </p>
                <p className="mb-6">
                  Our annual netball tournament celebrates Victoria Hawkins, a
                  remarkable netball player known in the community for her time with
                  McCarthy Stars and Panthers. The event also raises funds for
                  Nelson&apos;s Journey, a charity close to our hearts.
                </p>
                <p className="mt-8">
                  We hope you can join us in celebrating Vicky&apos;s memory.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-slate-800 text-xs text-white py-4">
        <div className="container mx-auto">
          <p className="text-center">
            The Victoria Hawkins 10th Memorial Netball Tournament
            <br />© {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}

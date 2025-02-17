import Image from "next/image";
import RegistrationForm from "./components/RegistrationForm";
import PaymentGuide from "./components/PaymentGuide";
import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";

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
        <main className="container mx-auto max-w-screen-lg px-4 py-10">
          <Hero />
        </main>
      </div>

      <div className="bg-white text-indigo-950">
        <div className="container mx-auto max-w-screen-lg px-4 py-16">
          <EventInfo />
        </div>
      </div>

      <div className="relative bg-gradient-to-t from-white to-violet-50 top-16">
        <div
          id="registration-form"
          className="relative container mx-auto max-w-screen-lg -top-16 px-4 md:px-20"
        >
          <section className="px-8 mx-auto py-4 my-10 border-2 border-neutral-300 bg-neutral-50 text-indigo-950 rounded-md shadow-lg">
            <RegistrationForm />
          </section>
        </div>

        <div
          id="payment-section"
          className="relative container mx-auto max-w-screen-lg -top-16 px-4 md:px-20"
        >
          <section className="px-8 mx-auto py-4 my-10 border-2 border-neutral-300 bg-neutral-50 text-indigo-950 rounded-md shadow-lg">
            <PaymentGuide />
          </section>
        </div>
      </div>

      <div className="bg-violet-50 text-indigo-950">
        <div className="container mx-auto max-w-screen-lg px-4 pt-24 pb-16">
          <section id="about-victoria">
            <div className="relative shadow-lg rounded-lg bg-white overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <Image
                  src="/victoria.jpg"
                  width={200}
                  height={600}
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
                  family's dream holiday to Florida. Tragically, she passed away
                  from Viral Myocarditis on 31 October 2014 during that trip.
                </p>
                <p className="mb-6">
                  After Vicky's sudden death, I organized a netball tournament
                  in her memory. I was amazed by the positive response and love
                  that people now eagerly anticipate this event every year.
                </p>
                <p className="mb-6">
                  Our annual netball tournament celebrates Victoria Hawkins, a
                  remarkable netballer known in the community for her time with
                  McCarthy Stars and Panthers. The event also raises funds for
                  Nelson's Journey, a charity close to our hearts.
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

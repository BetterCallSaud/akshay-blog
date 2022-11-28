import ProfilePicture from "../images/dp.jpg";
import { Footer, Navbar } from "./PageComponents";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about my-16 text-center">
        <h1
          style={{ fontFamily: "Fester" }}
          className="underline underline-offset-8 decoration-2 text-6xl font-bold text-slate-900"
        >
          About
        </h1>
        <div className="flex flex-row mx-8 my-20 justify-center">
          <div className="w-1/2 flex justify-center items-center">
            <img
              className="w-1/2 rounded-full"
              src={ProfilePicture}
              alt="akshayarya-dp"
            />
          </div>
          <div className="mr-6 w-1/2 h-auto text-blue-900 text-2xl flex flex-col justify-center">
            Hello World! I am Akshay Anjana. I am from Rajasthan India. If we
            look at formal education I am a commerce graduate. I am a 22 years
            old guy who is highly interested and curious about Reading, Writing,
            Music, Investing & Entrepreneurship.
          </div>
        </div>
        <div className="text-sm text-center mx-8">
          <h1 className="text-3xl">The Story</h1>
          <br />
          <p>
            Almost 4 years back, I started reading few blogs about investing,
            business and life. Which was a very different experience for me.
            There was a personal wish of mine, back then of start writing
            something. I in an excitement bought a domain name and tried
            designing the blog my self. There came point when I realised what
            will I write about😅, who will read it and why will they read it.
            Then the motivation suddenly faded away in a matter of minutes and
            reality hit me hard 😅. So I closed everything and said to myself
            not today but will surely start a blog in the future.
          </p>
          <p>
            So, here I am starting it today with a why, little bit of
            excitement, and willingness to share insights on the 5 aspects of
            life. ( Personal, Financial, Mental, Spiritual & Physical ).{" "}
          </p>
          <br />
          <br />
          <br />
          <h1 className="text-4xl">Why?</h1>
          <br />
          <p>
            To explore and learn story telling, writing, connecting with like
            minded people and figuring things out on the five aspects mentioned
            above.
          </p>
          <br />
          <br />
          <br />
          <h1 className="text-4xl">Who's this for?</h1>
          <br />
          <p>
            The people who love unschooling Figuring out what works and what
            doesn't. Avid readers Who are passionate to live an examined life.
          </p>
          <br />
          <br />
          <br />
          <h1 className="text-4xl">What is in this blog for you?</h1>
          <br />
          <p>My Personal Experience.</p>
          <p>Earned and Unearned wisdom </p>
          <p>Perception and insights to live an examined life.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

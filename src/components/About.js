import ProfilePicture from "../images/dp.jpg";
import { Footer, Navbar } from "./PageComponents";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about my-16 text-center mx-6">
        <h1
          style={{ fontFamily: "Fester" }}
          className="underline underline-offset-8 decoration-2 text-6xl font-bold text-slate-900"
        >
          About
        </h1>
        <div className="flex flex-row my-20 justify-center max-sm:flex-col max-sm:items-center">
          <div className="w-full mb-8 flex flex-1 justify-center items-center max-sm:w-full max-sm:mx-8">
            <img
              className="w-1/2 rounded-full max-sm:w-full"
              src={ProfilePicture}
              alt="akshayarya-dp"
            />
          </div>
          <div className="mr-6 w-1/2 h-auto flex-1 text-blue-900 text-2xl flex flex-col justify-center max-sm:text-lg max-sm:mr-0 max-sm:w-full max-sm:font-bold">
            Hello World! I am Akshay Anjana. I am from Rajasthan, India. If we
            look at formal education, I am a commerce graduate. I am a 22 years
            old guy who is highly interested and curious about Reading, Writing,
            Music, Investing & Entrepreneurship.
          </div>
        </div>
        <div className="text-xl text-center mx-8" style={{ fontFamily: 'Spectral' }}>
          <h1 className="text-4xl text-black">The Story</h1>
          <br />
          <p>
            Almost 4 years back, I started reading few blogs about investing,
            business and life. Which was a very different experience for me.
            There was a personal wish of mine, back then of start writing
            something. I in an excitement bought a domain name and tried
            designing the blog my self. There came a point when I realised what
            will I write about😅, who will read it and why will they read it.
            Then the motivation suddenly faded away in a matter of minutes and
            reality hit me hard 😅. So I closed everything and said to myself
            not today but will surely start a blog in the future.
          </p><br/>
          <p>
            So, here I am starting it today with a why, little bit of
            excitement, and willingness to share insights on the 5 aspects of
            life. ( Personal, Financial, Mental, Spiritual & Physical ).
          </p>
          <br />
          <br />
          <br />
          <h1 className="text-4xl text-black">Why?</h1>
          <br />
          <p>
            To explore and learn story telling, writing and connecting with like
            minded people and figuring things out on the five aspects mentioned
            above.
          </p>
          <br />
          <br />
          <br />
          <h1 className="text-4xl text-black">Who's this for?</h1>
          <br />
          <ul>
            <li>The people who love unschooling.</li>
            <li>Figuring out what works and what doesn't.</li>
            <li>Avid readers.</li>
            <li>Who are passionate to live an examined life.</li>
          </ul>
          <br />
          <br />
          <br />
          <h1 className="text-4xl text-black">What is in this blog for you?</h1>
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

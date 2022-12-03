import { Link } from "react-router-dom";
import {
  Navbar,
  Footer,
  WWContentCard,
  SubscribeSection,
} from "./PageComponents";
import { PROJECT_ID, DATASET } from "../utils";

import "../styles/Home.css";
import VideoSeq from "../images/AttributesVideoSequence.mp4";

let wisdomSection = document.getElementById("wisdomSection");
let QUERY = encodeURIComponent('*[_type == "wisdom"]');

let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

setTimeout(() => {
  fetch(PROJECT_URL)
    .then((res) => res.json())
    .then(({ result }) => {
      // let list = document.querySelector("ul");
      if (result.length > 0) {
        let i = 1;
        result.forEach((wisdom) => {
          localStorage.setItem("wisdomContent", wisdom?.wisdomContent);
          wisdomSection.textContent = wisdom?.wisdomContent;
          i++;
        });
      }
    })
    .catch((err) => console.error(err));
}, 1000);

var fadeElements = document.getElementsByClassName("scrollFade");

function scrollFade() {
  // var viewportBottom = window.scrollY + window.innerHeight;

  for (var index = 0; index < fadeElements.length; index++) {
    var element = fadeElements[index];
    var rect = element.getBoundingClientRect();

    var elementFourth = rect.height / 4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height / 2);

    if (rect.top <= fadeInPoint) {
      element.classList.add("scrollFade--visible");
      element.classList.add("scrollFade--animate");
      element.classList.remove("scrollFade--hidden");
    } else {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }
  }
}

document.addEventListener("scroll", scrollFade);
window.addEventListener("resize", scrollFade);
document.addEventListener("DOMContentLoaded", function () {
  scrollFade();
});

document.addEventListener("scroll", scrollFade);
window.addEventListener("scroll", scrollFade);
document.addEventListener("DOMContentLoaded", function () {
  scrollFade();
});

function HomePage() {
  document.title = "Akshay Arya | Home";
  window.scrollTo(0, 0);
  return (
    <div className="homeContainer">
      <Navbar />
      <div id="HeroContainer" className="heroContainer">
        <h1>Welcome to My world!</h1>
        <p>Reflect upon ideas. Embark on adventures.</p>
      </div>
      <div id="ShortBio" className="shortBio">
        <video src={VideoSeq} autoPlay muted loop></video>
      </div>
      <div id="WisdomWall" className="bg-slate-900 py-20 text-white">
        <h1 className="scrollFade fester text-center text-5xl underline underline-offset-6 mb-24">
          Wisdom Wall
        </h1>
        <div className="flex">
          <div className="flex-1 flex flex-col justify-left mx-12">
            <section id="wisdomSection" className="text-white mb-10 rounded-lg text-xl italic max-sm:text-sm">{localStorage.getItem("wisdomContent")}</section>
            <div className="font-bold">
              <p className="text-left">{new Date().toDateString()}</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center mr-5">
            <h1 className="mb-6 text-3xl max-sm:text-xl max-sm:text-center">
              Want more wisdom?
            </h1>
            <Link
              className="bg-red-600 p-2 rounded-2xl text-white font-black border-red-400 border-2 tracking-widest hover:scale-125 transition-all transition-200"
              to="/wisdom"
            >
              Read
            </Link>
          </div>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default HomePage;

import { Link } from "react-router-dom";
import { Navbar, Footer, WWContentCard } from "./PageComponents";

import "../styles/Home.css";
import VideoSeq from "../images/AttributesVideoSequence.mp4";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Shy-w3syjvCTpQDtMR77LuhXSzOofSU",
  authDomain: "akshayblog-92830.firebaseapp.com",
  projectId: "akshayblog-92830",
  storageBucket: "akshayblog-92830.appspot.com",
  messagingSenderId: "902228769222",
  appId: "1:902228769222:web:67e6d10197e61980ea5ac7",
  measurementId: "G-QWFN2915HL"
};

// Initialize Firebase and database
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function subscribeClickHandler() {
  const docRef = doc(db, "subscribers", "details");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists())
    console.log(`Document data: ${docSnap.data()}`);
  else
    console.log('No such document');
}

var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
  var viewportBottom = window.scrollY + window.innerHeight;

  for (var index = 0; index < fadeElements.length; index++) {
    var element = fadeElements[index];
    var rect = element.getBoundingClientRect();

    var elementFourth = rect.height/4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height/2);

    if (rect.top <= fadeInPoint) {
      element.classList.add('scrollFade--visible');
      element.classList.add('scrollFade--animate');
      element.classList.remove('scrollFade--hidden');
    } else {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }
  }
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
  scrollFade();
});

document.addEventListener("scroll", scrollFade);
window.addEventListener("scroll", scrollFade);
document.addEventListener('DOMContentLoaded', function() {
  scrollFade();
});

function HomePage() {
  document.title = "Akshay Arya | Home";
  window.scrollTo(0,0); 
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
          <WWContentCard />
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="mb-6 text-3xl">Want more wisdom?</h1>
            <Link
              className="bg-red-600 p-2 rounded-2xl text-white font-black border-red-400 border-2 tracking-widest hover:scale-125 transition-all transition-200"
              to="/wisdom"
            >
              READ
            </Link>
          </div>
        </div>
      </div>
      <div
        id="Subscribe"
        className="py-20 text-black flex flex-col justify-center text-center"
      >
        <h1 className="scrollFade fester text-center text-5xl underline underline-offset-6 mb-12">
          Subscribe
        </h1>
        <p>
          If you want to join this journey of exploration, <b>Subscribe</b> to
          quench your thirst for curiosity!
        </p><br/>
        <div id="subscribe-form" className="flex justify-center w-full">
          <input
            id="subscribeInput"
            placeholder="Enter your email ID here"
            className="w-2/3 border-2 border-opacity-30 rounded-sm border-black mr-4 pl-3"
          />
          <button className="bg-red-700 text-white p-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

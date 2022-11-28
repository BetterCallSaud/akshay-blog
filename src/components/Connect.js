import { Footer, Navbar } from "./PageComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Connect() {
  window.scrollTo(0, 0);
  document.title = "Connect with Akshay!";

  return (
    <>
      <Navbar />
      <div className="connect my-16 text-center">
        <h1 style={{ fontFamily: "Fester" }} className="text-5xl font-bold">
          Connect
        </h1>
        <br />
        <p>Find me on these platforms and we can connect!</p>
        <br />
        <br />
        <div className="flex flex-row justify-evenly mx-24 text-slate-800">
          <div>
            <a rel="noreferrer" target={"_blank"} href="mail:akshayarya04@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="text-6xl mb-4 hover:text-slate-700 transition-all duration-500" />
            </a>
            <h1 className="text-lg">Email</h1>
          </div>
          <div>
            <a rel="noreferrer" target={"_blank"} href="https://instagram.com/akshay_arya30">
              <FontAwesomeIcon icon={faInstagram} className="text-6xl mb-4 hover:text-slate-700 transition-all duration-500" />
            </a>
            <h1 className="text-lg">Instagram</h1>
          </div>
          <div>
            <a rel="noreferrer" target={"_blank"} href="https://www.facebook.com/akshay.aanjna.7">
              <FontAwesomeIcon icon={faFacebook} className="text-6xl mb-4 hover:text-slate-700 transition-all duration-500" />
            </a>
            <h1 className="text-lg">Facebook</h1>
          </div>
          <div>
            <a rel="noreferrer" target={"_blank"} href="https://twitter.com/akshayanjana3">
              <FontAwesomeIcon icon={faTwitter} className="text-6xl mb-4 hover:text-slate-700 transition-all duration-500" />
            </a>
            <h1 className="text-lg">Twitter</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import { Link } from "react-router-dom";
import "../styles/Home.css";

function HomePage() {
  return (
    <div className="homeContainer">
      <div className="navbar">
        <div className="navbarLeft">
          <h1>akshay.</h1>
        </div>
        <div className="navbarRight">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/blog">
            <h2>Blog</h2>
          </Link>
          <Link to="/contact-me">
            <h2>Contact</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
        </div>
      </div>
      <div className="heroContainer">
        <h1>welcome to my world!</h1>
        <p>reflect upon ideas. embark on adventures.</p>
      </div>
      <div className="shortBio">
        <h1>Akshay Anjana is...</h1>
        <ol className="flex flex-col items-center">
          <li className="bg-orange-500">a Yogic soul</li>
          <li className="bg-teal-500">a finance mafia</li>
          <li className="bg-blue-500">an adventurer</li>
        </ol>
      </div>
      <div className="curiositiesSection">
        <h1 className="text-5xl underline underline-offset-8">Curiosities</h1>
        <br />
        <p className="text-2xl">How to do market research?</p>
      </div>
      <div className="ideasSection">
        <h1 className="text-5xl underline underline-offset-8">Ideas</h1>
        <br />
        <p className="text-2xl">
          Authenticity, Courage, Hard work and Curiosity are the 4 tools to live
          a full filing life and finding your circle of competence…
        </p>
      </div>
      <div className="reflectionsSection">
        <h1 className="text-5xl underline underline-offset-8">Reflections</h1>
        <br />
        <p className="text-2xl">
          Creating a payroll system in organisations and Businesses where you
          don’t get paid in form of salary (like ₹30,000/ Monthly) or ownership
          stake (Like 40% Stake) rather you get paid on the tasks you have
          completed, in this system each taks will be assigned certain credit
          and people can be paid on getting things done rather than positions or
          job roles.
        </p>
        <p className="text-2xl">
          So this will create an incentive system in the organisation and will
          keep everyone up for work and motivate them to work hard. The most
          working will get paid more and people working less will be paid lower.
          So the whole system works on the input of work one gives…
        </p>
      </div>
    </div>
  );
}

export default HomePage;

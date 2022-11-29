import { Link } from "react-router-dom";

function Navbar() {
  const toggleNavbar = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
  };
  return (
    <div
      className="navbar flex flex-wrap
    items-center
    justify-between
    w-full
    py-4
    md:py-0
    px-4
    text-lg text-gray-700
    bg-slate-900"
    >
      <h1 className="text-2xl">akshay.</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={toggleNavbar}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className="hidden w-full md:flex md:justify-evenly md:items-center md:w-auto max-sm:text-xs max-md:text-md"
        id="menu"
      >
        <ul
          className="
            navbarRight
              pt-4
              text-base text-white
              md:flex
              md:justify-between 
              md:pt-0
              max-sm:text-xs
              "
        >
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/blog">
            <h2>Blog</h2>
          </Link>
          <Link to="/connect">
            <h2>Connect</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer bg-slate-900 text-white font-bold flex w-full justify-evenly py-2 px-6">
      <Link to="/">Home</Link>
      <p>{"//"}</p>
      <Link to="/blog">Blog</Link>
      <p>{"//"}</p>
      <Link to="/connect">Connect</Link>
      <p>{"//"}</p>
      <Link to="/about">About</Link>
    </footer>
  );
}

function WWContentCard() {
  let date = new Date();

  return (
    <div className="flex-1 flex flex-col justify-left mx-12">
      <section className="text-white mb-10 rounded-lg text-xl italic max-sm:text-sm">
        People resist change because they rather stick to the known devil than
        pursue the unknown angel. Familiarity breeds comfort and inertia.
      </section>
      <div className="font-bold">
        <p className="text-left">{date.toDateString()}</p>
      </div>
    </div>
  );
}

function BlogPost(props) {
  return (
    <div className="text-left mx-6 my-8">
      <h1 className="text-4xl text-slate-900">{props.blogTitle}</h1>
      <br />
      <section className="text-xl text-slate-600">{props.blogContent}</section>
      <hr className="w-4/12 h-0.5 my-4 bg-black" />
      <span className="text-sm font-bold italic">{props.dateCreated}</span>
    </div>
  );
}

function SubscribeSection() {
  return (
    <div
      id="Subscribe"
      className="py-20 text-black flex flex-col justify-center text-center mx-4"
    >
      <h1 className="fester text-center text-5xl underline underline-offset-6 mb-12">
        Subscribe
      </h1>
      <p>
        If you want to join this journey of exploration, <b>Subscribe</b> to
        quench your thirst for curiosity!
      </p>
      <br />
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
  );
}

export { Navbar, Footer, WWContentCard, BlogPost, SubscribeSection };

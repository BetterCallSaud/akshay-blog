import { Link } from "react-router-dom";

function Navbar() {
    return (
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
    )
}

function Footer() {
    return (
        <footer className="footer bg-slate-900 text-white font-bold flex w-full justify-evenly py-2 px-6">
            <Link to="/">Home</Link>
            <p>{"//"}</p>
            <Link to="/blog">Blog</Link>
            <p>{"//"}</p>
            <Link to="/contact">Contact</Link>
            <p>{"//"}</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

function WWContentCard() {
    let date = new Date();
    
    return (
      <div className="flex-1 flex flex-col justify-left mx-12">
        <section className="bg-blue-100 text-black p-10 rounded-lg text-xl italic">
          People resist change because they rather stick to the known devil than
          pursue the unknown angel. Familiarity breeds comfort and inertia.
        </section>
        <div className="font-bold">
          <p className="text-right pr-2 pt-2">{date.toDateString()}</p>
        </div>
      </div>
    );
  }  

export { Navbar, Footer, WWContentCard };
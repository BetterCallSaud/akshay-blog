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
        <Link to="/connect">
          <h2>Connect</h2>
        </Link>
        <Link to="/about">
          <h2>About</h2>
        </Link>
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
      <section className="text-white p-10 rounded-lg text-xl italic">
        People resist change because they rather stick to the known devil than
        pursue the unknown angel. Familiarity breeds comfort and inertia.
      </section>
      <div className="font-bold">
        <p className="text-left pl-10">{date.toDateString()}</p>
      </div>
    </div>
  );
}

function BlogPost(props) {
  return (
    <div className="text-left mx-6 my-8">
      <h1 className="text-4xl text-slate-900">{props.blogTitle}</h1><br/>
      <section className="text-xl text-slate-600">{props.blogContent}</section>
      <hr className="w-4/12 h-0.5 my-4 bg-black"/>
      <span className="text-sm font-bold italic">{props.dateCreated}</span>
    </div>
  )
}

export { Navbar, Footer, WWContentCard, BlogPost };
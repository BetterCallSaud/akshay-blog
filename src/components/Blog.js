import { Component, useEffect } from "react";
import { Navbar, BlogPost, Footer } from "../components/PageComponents";
import { PROJECT_ID, DATASET } from "../utils";
import "../styles/Blog.css";

let posts = [];
let QUERY = encodeURIComponent('*[_type == "post"]');
let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

fetch(PROJECT_URL)
.then((res) => res.json())
.then(({ result }) => {
  // let list = document.querySelector("ul");
  if (result.length > 0) {
    let i = 1;
    result.forEach((post) => {
      posts.push(
        <BlogPost
          key={i}
          blogTitle={post?.blogTitle}
          blogContent={post?.blogContent}
          dateCreated={post?._createdAt.slice(0,10)}
        />
      );
      i++;
    });
  }
})
.catch((err) => console.error(err));

export default function Blog() {
  window.scrollTo(0, 0);
  document.title = "Blog | Akshay Arya";

  return (
    <>
      <Navbar />
      <div
        id="blogHeroContainer"
        className="blogHeroContainer text-white bg-cover"
      >
        <h1>Blog.</h1>
        <br />
        <p>Unschooling, wisdom and principles</p>
        <p>for a good life</p>
      </div>
      <div
        className="m-8 blog-container text-slate-800"
        style={{ fontFamily: "Noto Serif" }}
      >
        <h1 className="text-4xl text-center underline underline-offset-8 text-slate-900 font-bold mb-20" style={{ fontFamily: 'Poppins' }}>
          Blog
        </h1>
        <ul className="w-1/2">
          {posts}
        </ul>
      </div>
      <Footer />
    </>
  );
}

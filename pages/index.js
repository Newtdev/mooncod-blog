import HeroSection from "../components/homepage/HeroSection";
import ArticleContainer from "../components/homepage/ArticleContainer";
import { groq } from "next-sanity";
import { getClient } from "../lib/sanity.server";
import axios from "axios";
import { useState } from "react";

// import { sanityClient } from "../lib/sanity.server";

// import "../styles/h.css";
const postQuery = groq`*[_type =='post']{_id,title,description,poster,slug,author}`;

const Blog = ({ post }) => {
  const [text, setText] = useState("");

  const filterData = () => {
    return post?.filter((cur) =>
      cur.title.toLowerCase().includes(text.toLowerCase())
    );
  };

  const filteredText = (data) => {
    setText(data);
  };
  return (
    <main className="max-w-screen h-screeen bg-[#080A0C] bg-[url('../assets/walletbackgroundgradient.webp')]  bg-cover bg-no-repeat bg-top">
      <section className=' w-full h-full'>
        <HeroSection getText={(data) => filteredText(data)} />
      </section>
      <div className='mx-auto mt-16 py-4'>
        <ArticleContainer post={filterData()} />
      </div>
    </main>
  );
};

/**
 * *[_type == 'movie' && releaseYear >= 1979]{ _id, title, releaseYear }
 */
export async function getStaticProps({ preview = false }) {
  const post = await getClient(preview).fetch(postQuery);
  return {
    props: { post },
    revalidate: 10, // In seconds
  };
}

export default Blog;

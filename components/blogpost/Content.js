import {
  PortableText,
  PortableTextComponentsProvider,
} from "@portabletext/react";
import ContentHeader from "./ContentHeader";
import BlogComment from "./BlogComment";
import SimilarArticle from "./SimilarArticle";

const Content = ({ post, blog }) => {
  const components = {
    block: {
      h1: ({ children }) => <h1 className='text-3xl py-10'>{children}</h1>,
      h2: ({ children }) => <h2 className='text-3xl py-10'>{children}</h2>,
      h3: ({ children }) => <h3 className='text-3xl py-10'>{children}</h3>,
      h4: ({ children }) => <h4 className='text-3xl py-10'>{children}</h4>,
      h5: ({ children }) => <h5 className='text-3xl py-10'>{children}</h5>,
      h6: ({ children }) => <h6 className='text-3xl py-10'>{children}</h6>,
      normal: ({ children }) => (
        <p className='text-md lg:text-lg leading-10 lg:leading-[47px]'>
          {children}
        </p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className='mt-xl pl-10 py-4 list-disc leading-10'>{children}</ul>
      ),
    },
  };

  function displayData() {
    if (!post) return;
    return (
      <PortableTextComponentsProvider components={components}>
        <article className='container mx-auto md:px-16 lg:px-4 xl:px-20 mx-auto w-full h-full '>
          <div className='px-6 lg:w-3/4 mx-auto'>
            <PortableText value={post.Post} />
          </div>
        </article>
      </PortableTextComponentsProvider>
    );
  }
  if (!post) {
    return null;
  }
  return (
    <main className="min-h-screen max-w-screen bg-[#080A0C] bg-[url('../assets/walletbackgroundgradient.webp')]  bg-contain bg-no-repeat bg-top">
      <article className='container h-full w-full md:px-16 xl:px-20 mx-auto w-full flex flex-col items-center justify-between flex-wrap lg:flex-nowrap sm:mt-8 md:mt-0'>
        <div className='w-full pb-4 md:mb-0 mt-20 mt-20 lg:mt-36 px-8 lg:px-4 lg:w-3/4'>
          <ContentHeader {...post} />
        </div>
      </article>
      {/* BLOG MAIN POST SECTION */}
      <section className='w-full pb-10 mb-28'>{displayData()}</section>
      <section className='mb-6'>
        <article className='container  h-full w-full md:px-16 mx-auto w-full'>
          <div className='w-full flex flex-col md:flex-row items-center md:px-6 lg:px-24 xl:px-44 mt-4 mb-10'>
            <h1 className='text-xl md:text-xl lg:text-3xl font-bold'>
              SIMILAR ARTICLES
            </h1>
            <span className='inline-block bg-gradient-to-tr from-[#008AED] to-[#54F0D1] w-80 h-px mx-4 my-3 lg:my-0'></span>
          </div>
          <SimilarArticle blog={blog} id={post._id} />
        </article>
      </section>
      <section>{/* <CommentContainer /> */}</section>
      <section>{/* <BlogComment /> */}</section>
    </main>
  );
};

export default Content;

import { Fragment } from "react";
import Article from "./Article";
import Loadmore from "./Loadmore";

function ArticleContainer({ post }) {
  const displayData = () => {
    return post.map((postDetails) => {
      return (
        <Fragment key={postDetails._id}>
          <Article {...postDetails} />
        </Fragment>
      );
    });
  };
  return (
    <section className=' h-full w-screen lg:px-16 xl:px-24'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 h-full justify-items-center px-6'>
        {displayData()}
      </div>
      {/* LOAD MORE BUTTON */}
      <div className='w-full md:w-96 mx-auto py-4 mt-8 flex justify-center items-center'>
        {/* <Loadmore /> */}
      </div>
    </section>
  );
}

export default ArticleContainer;

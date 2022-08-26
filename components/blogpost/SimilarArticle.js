import { Fragment } from "react";
import Article from "../homepage/Article";

const SimilarArticle = ({ blog, id }) => {
  const displayData = () => {
    return blog
      .filter((post) => post._id !== id)
      .map((postDetails) => {
        return (
          <Fragment key={postDetails._id}>
            <Article {...postDetails} />
          </Fragment>
        );
      });
  };

  if (!blog) {
    return null;
  }

  return (
    <div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:px-40 gap-y-6 h-full justify-items-center px-6 mt-6'>
      {displayData()}
    </div>
  );
};

export default SimilarArticle;

import { useRef, useState } from "react";
const BlogComment = () => {
  const [comments, setComment] = useState({});
  const inputValue = useRef("");
  const commentValue = useRef("");

  var commentArray = [];

  function onChange(e) {
    setComment((prev) => {
      return { ...prev, name: inputValue.current.value };
    });
  }

  function onCommentChange() {
    setComment((prev) => {
      return { ...prev, comment: commentValue.current.value };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    commentArray = [...commentArray, comments];
    // localStorage.setItem("comment", JSON.stringify(comments));
  }
  return (
    <article className='container mx-auto h-screen md:px-16 xl:px-20 mb-4'>
      {console.log(commentArray)}
      <div className='w-full flex items-center md:px-40 my-4'>
        <h1 className=' text-3xl font-bold'>DROP YOUR FEEDBACK HERE</h1>
        <span className='inline-block bg-gradient-to-tr from-[#008AED] to-[#54F0D1] w-80 h-px mx-4'></span>
      </div>
      <div>
        <form
          className='w-full h-[38rem] md:px-40 flex flex-col items-start justify-evenly'
          onSubmit={onSubmit}>
          <label className='font-bold'>Your Name</label>
          <input
            type='text'
            className='w-96 my-18 py-3 px-3 rounded-md outline-none focus:bg-white focus:shadow-lg focus:text-black'
            placeholder='Your Full Name'
            onChange={onChange}
            ref={inputValue}
          />
          <label className='font-bold'>Your Comment</label>
          <textarea
            cols={100}
            onChange={onCommentChange}
            rows={13}
            ref={commentValue}
            placeholder='Write Your Comment Here.'
            className='rounded-md px-3 py-2 transition outline-none text-white focus:bg-white focus:shadow-lg focus:text-black'></textarea>
          <button
            className='hidden lg:block bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 my-3 rounded-full text-white'
            type='submit'>
            POST COMMENT
          </button>
        </form>
      </div>
    </article>
  );
};
export default BlogComment;

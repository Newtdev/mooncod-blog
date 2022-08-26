import { Fragment } from "react";

function Loadmore() {
  return (
    <Fragment>
      {/* <button className='outline outline-[#008AED] text-[#008AED] px-11 py-3 rounded-l-full text-white'>
        Prev
      </button> */}
      <button className='bg-gradient-to-tr from-[#008AED] outline outline-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white'>
        Load more
      </button>
    </Fragment>
  );
}

export default Loadmore;

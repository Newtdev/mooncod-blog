import Navigation from "../homepage/Navigation";
import Footer from "./Footer";
import PreFooter from "./preFooter";

function Layouts({ children }) {
  return (
    <div className='overflow-hidden'>
      <Navigation />
      {children}
      <PreFooter />
      <Footer />
    </div>
  );
}

export default Layouts;

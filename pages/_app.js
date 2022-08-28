import "../styles/globals.css";
import Layouts from "../components/layout/Layout";
// import dat from '../public/'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>{/* <link rel="" href="/favicon.ico"></link> */}</head>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}

export default MyApp;

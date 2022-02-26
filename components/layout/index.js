import Navbar from "../Navbar";
import Head from "next/head";
import { Main } from "./LayoutElement";
// import { Footer } from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>my portfolio</title>
      </Head>
      <Navbar />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

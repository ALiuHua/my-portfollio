import Navbar from "../Navbar";
import Head from "next/head";
import { Main } from "./LayoutElement";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../styles/theme.config";
// import { Footer } from "../Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleThemeHandler = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  console.log(theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Head>
        <title>my portfolio</title>
      </Head>
      <Navbar theme={theme} toggleTheme={toggleThemeHandler} />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;

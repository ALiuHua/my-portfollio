import Navbar from "../components/Navbar";
import { ThemeProvider } from "styled-components";
import { lightTheme, GlobalStyles } from "../styles/theme.config";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

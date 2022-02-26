import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme, GlobalStyles } from "../styles/theme.config";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme, GlobalStyles } from "../styles/theme.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

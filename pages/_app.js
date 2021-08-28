import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";
import { Grommet } from "grommet";
import theme from "lib/theme";

import "resize-observer-polyfill";
import "styles/globals.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
import "assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
import "assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";
import "assets/fonts/typography-font/Circular-Std-Book.ttf";
import "assets/fonts/typography-font/CircularStd-Black.ttf";
import "assets/fonts/typography-font/CircularStd-BlackItalic.ttf";
import "assets/fonts/typography-font/CircularStd-Bold.ttf";
import "assets/fonts/typography-font/CircularStd-BoldItalic.ttf";
import "assets/fonts/typography-font/CircularStd-Book.ttf";
import "assets/fonts/typography-font/CircularStd-BookItalic.ttf";
import "assets/fonts/typography-font/CircularStd-Medium.ttf";
import "assets/fonts/typography-font/CircularStd-MediumItalic.ttf";
import "assets/fonts/icon-font/fonts/avasta.ttf";
import "assets/fonts/icon-font/css/style.css";
import "assets/fonts/icon-font/css/style.css";
import "assets/fonts/typography-font/typo.css";
import "assets/fonts/fontawesome-5/css/all.css";
import "components/Layout/bootstrap-custom.scss";

const MyApp = ({ Component, pageProps, router }) => {
  if (router.pathname.match(/sign|reset|coming/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "bare" }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  }

  return (
    <Grommet theme={theme}>
      <GlobalProvider>
        <Layout pageContext={{}}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </Grommet>
  );
};

export default MyApp;

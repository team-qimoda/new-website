import "../styles/globals.css";
import { Grommet } from "grommet";
import theme from "../lib/theme";

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;

import "../styles/globals.css";
import "antd/dist/antd.dark.css";

import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

import "antd/dist/antd.dark.css";
import { AppProps } from "next/app";
import "../styles/globals.css";


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

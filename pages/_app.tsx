import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sibebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import layout from "../styles/components/layout.module.scss";
import Sidebar from "../components/Sibebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Components</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={layout.layout__main}>
        <span>
          <h1>Click on the component you wish to see on the sidebar</h1>
        </span>
        <span>
          <h3>Made by Gabriel Sajfar</h3>
        </span>
      </div>
    </>
  );
}

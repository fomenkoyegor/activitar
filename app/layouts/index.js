import Head from "next/head";
import {FC} from "react";
import { Header, Footer } from "../components/base";

const Layout = ({
 title = "ACTIVITAR",
 keywords = "",
 children,
}) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="favicon"/>
        <title>{title}</title>
      </Head>
      <Header/>
      <main className='min-h-screen'>{children}</main>
      <Footer/>
    </>
  );
}

export default Layout;
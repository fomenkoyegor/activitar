import type { NextPage } from "next";
import Head from "next/head";

const SignInPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SignIn</title>
        <meta name="description" content="login by admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form>
          <input type="emeil" placeholder="emeil" />
          <input type="submit" value={"SignIn"} />
        </form>
      </main>
    </>
  );
};

export default SignInPage;

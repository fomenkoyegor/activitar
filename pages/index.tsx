import type { NextPage } from "next";
import Layout from "../app/layouts";

const HomePage: NextPage = (props) => {
  return (
    <Layout>
      <h1>hello</h1>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </Layout>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  const data = {some: "lorem"}
  return {
    props: { data },
  }
}

export default HomePage;
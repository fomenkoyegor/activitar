import type { NextPage } from "next";
import Layout from "../app/layouts";

const HomePage: NextPage = (props) => {
  return (
    <Layout>
      <h1>hello</h1>
      <pre>{JSON.stringify(props.feed, null, 2)}</pre>
    </Layout>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/feed')
  const feed = await res.json() 
  return {
    props: { feed },
  }
}

export default HomePage;
import type { NextPage } from "next";
import Layout from "../../app/layouts";

const PostPage: NextPage = (props) => {
  return (
    <Layout title='post'>
      <h1>hello</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Layout>
  );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/blog/${context.params.id}`)
  const post = await res.json()
  return {
    props: { post },
  }
}

export default PostPage;
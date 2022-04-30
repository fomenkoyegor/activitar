import type { NextPage } from "next";
import Layout from "../../app/layouts";
import {api} from '../../lib/api'

const PostPage: NextPage = (props) => {
  return (
    <Layout title={props.post.slug}>
      <h1>hello</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Layout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
  const post = await api.post(req, params.slug)
  return {
    props: { post },
  }
}

export default PostPage;
import type { NextPage } from "next";
import Layout from "../../app/layouts";
import Link from "next/link";
import {api} from '../../lib/api'

interface IProps {
  feed: []
}

const BlogPage: NextPage<IProps> = ({feed}) => {
  return (
    <Layout title='BLOG'>
      <h1>hello</h1>
      <ul>
        {feed.map(p => <li key={p.id}>
            <h3>{p.title}</h3>
            <Link href={`/blog/${p.slug}`}>
                <a className='bg-black text-white p-1 rounded'>go to {p.slug}</a>
            </Link>
          </li>)}
      </ul>
      <pre>{JSON.stringify(feed.map(p => p), null, 2)}</pre>

    </Layout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const feed = await api.posts(req)
  return {
    props: { feed },
  }
}

export default BlogPage;
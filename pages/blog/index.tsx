import type { NextPage } from "next";
import Layout from "../../app/layouts";
import Link from "next/link";

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
            <Link href={`/blog/${p.id}`}>
                <a className='bg-black text-white p-1 rounded'>go to</a>
            </Link>
          </li>)}
      </ul>
      <pre>{JSON.stringify(feed.map(p => p), null, 2)}</pre>

    </Layout>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/blog/feed')
  const feed = await res.json()
  return {
    props: { feed },
  }
}

export default BlogPage;
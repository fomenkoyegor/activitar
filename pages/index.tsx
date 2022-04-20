import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaBeer, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { api } from "../lib/api";
import { CategoriesList } from "../app/components/CategoriesList";

interface IPost {
  id: number;
  title: string;
  description: string;
  content: string;
}

interface IProps {
  posts: IPost[];
  title: string;
  keywords: string;
  categories: [];
}

const Home: NextPage<IProps> = ({ posts, title, keywords, categories }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="ACTIVAR" />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CategoriesList categories={categories} />
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link href={`/${post.title}`} key={post.id}>
              <a className={styles.card}>
                <FaShoppingCart />
                <h2>{post.title} &rarr;</h2>
                <p>{post.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const data = await api.posts(req);
  const categories = (await api.categories(req)).categories;
  return {
    ...data,
    categories,
  };
};

export default Home;

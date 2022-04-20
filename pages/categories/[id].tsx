import { NextPage } from "next";
import { api } from "../../lib/api";
import { AiFillCamera } from "react-icons/ai";
import Link from "next/link";

interface ICategory {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUser {
  id: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IPost {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  userId: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  category: ICategory;
  user: IUser;
}

interface IProps {
  posts: IPost[];
}

export const formatDate = (d: any) =>
  new Intl.DateTimeFormat("en-AU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(d));

const CategoryPage: NextPage<IProps> = ({ posts }) => {
  return (
    <div className="flex">
      {posts.map((post) => (
        <Link href={`/${post.title}`}>
          <div className="p-10 cursor-pointer" key={post.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <AiFillCamera />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base">{post.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{post.category.name}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{post.user.email}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{formatDate(post.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

CategoryPage.getInitialProps = async ({ req, query }) => {
  const categoryId = query.id as string;
  const data = await api.postCategory(req, +categoryId);
  return { ...data };
};

export default CategoryPage;

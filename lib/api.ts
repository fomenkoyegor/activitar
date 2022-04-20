import absoluteUrl from "next-absolute-url";

const fetcher = async (req: any, path: any) => {
  const { origin } = absoluteUrl(req, "localhost:3000");
  const res = await fetch(`${origin}/api/${path}`);
  return await res.json();
};

function posts(req: any) {
  return fetcher(req, "posts");
}

function postCategory(req: any, categoryId: number) {
  return fetcher(req, `post-category?categoryId=${categoryId}`);
}

function categories(req: any) {
  return fetcher(req, "categories");
}

async function post(req: any, title: string) {
  return fetcher(req, `post/?title=${title}`);
}

export const api = {
  posts,
  post,
  categories,
  postCategory,
};

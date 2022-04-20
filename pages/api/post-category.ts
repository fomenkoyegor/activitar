export default async (req: any, res: any) => {
  const { categoryId = 1 } = req.query;
  const response = await fetch(
    `http://113.30.190.164:5000/posts?categoryId=${categoryId}`
  );
  const data = await response.json();
  const posts = data.rows;
  const title = "ACTIVAR";
  const keywords = posts.map((p: any) => p.title).join(", ");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.status(200).json({ posts, title, keywords });
};

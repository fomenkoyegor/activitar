export default async (req: any, res: any) => {
  const { title = "" } = req.query;
  const response = await fetch(
    `http://113.30.190.164:5000/posts/name/${title}`
  );
  const post = await response.json();
  const imageSrc = `http://113.30.190.164:5000/${post.image}`;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.status(200).json({ title, post: { ...post, imageSrc } });
};

export default async (req: any, res: any) => {
  const response = await fetch(`http://113.30.190.164:5000/categories`);
  const data = await response.json();
  const categories = data;
  const title = "categories";
  const keywords = categories.map((p: any) => p.name).join(", ");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.status(200).json({ categories, title, keywords });
};

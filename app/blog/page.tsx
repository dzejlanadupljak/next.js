import BlogCard from "../components/BlogCard";

interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

export default async function BlogPage() {
  // Fetch posts from API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: ApiPost[] = await res.json();

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Prvi članak",
      excerpt: "Ovo je sažetak prvog članka.",
      author: "Ivan Horvat",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Drugi članak",
      excerpt: "Ovo je sažetak drugog članka.",
      author: "Ana Kovač",
      date: "2024-02-20",
    },
    {
      id: 3,
      title: "Treći članak",
      excerpt: "Ovo je sažetak trećeg članka.",
      author: "Marko Marić",
      date: "2024-03-10",
    },
  ];

  return (
    <div className="space-y-10">
      {/* API postovi */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Postovi sa API-ja</h1>

        {data.slice(0, 10).map((post) => (
          <div key={post.id} className="mb-4">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {/* BlogCard postovi */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Blog postovi</h1>

        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

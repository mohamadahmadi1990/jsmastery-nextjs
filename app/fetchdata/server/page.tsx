import type { Post } from "@/app/types";

export default async function FetchDataServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts: Post[] = await response.json();

  return (
    <div className="p-4">
      {posts.map((post) => (
        <div className="border border-gray-300 p-4 m-2" key={post.id}>
          <h2 className="text-lg font-bold text-amber-300">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
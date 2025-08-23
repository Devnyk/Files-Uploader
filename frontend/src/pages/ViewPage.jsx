import { useLoaderData } from "react-router-dom";

export default function ViewPage() {
  const posts = useLoaderData(); // data from postsLoader

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="border rounded p-4">
            <p className="font-semibold">{post.caption}</p>
            {post.url && (
              <img
                src={post.url}
                alt={post.caption}
                className="mt-2 max-h-64 object-cover rounded"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PostCard({ post }) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img src={post.url} alt="post" className="w-full h-60 object-cover rounded" />
      <p className="mt-2 font-medium">{post.caption}</p>
    </div>
  );
}

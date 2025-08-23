import api from "../services/api";

export async function postsLoader() {
  try {
    const res = await api.get("/posts");
    console.log(res);
    return res.data.posts; // we return only the array
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    throw new Response("Failed to load posts", { status: 500 });
  }
}

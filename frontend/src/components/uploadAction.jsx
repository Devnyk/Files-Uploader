import api from "../services/api";
import { redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();

  await api.post("/post", formData);

  // redirect back to home after successful post
  return redirect("/");
}

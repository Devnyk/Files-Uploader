import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/AppRouter"; // 👈 all routes here
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
);

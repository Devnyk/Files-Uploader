import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ViewPage from "../pages/ViewPage";
import { postsLoader } from "../components/postsLoader";
import UploadPage from "../pages/UploadPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ViewPage />,
        loader: postsLoader,
      },
      {
        path: "upload",
        element: <UploadPage />,
      },
    ],
  },
]);

export default router;

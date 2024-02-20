import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@/App.css";

import NotFoundPage from "@/not-found-page";
import ErrorBoundary from "@/error-page";
import Layout from "@/layout";
import AboutPage from "@/routes/about-page/page";
import HomePage from "@/routes/root/page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "about-us",
        Component: AboutPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Beauty from "./pages/products/Beauty";
import Hair from "./pages/products/Hair";
import Dressing from "./pages/products/Dressing";

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products/beauty",
        element: <Beauty />,
      },
      {
        path: "/products/hairstyle",
        element: <Hair />,
      },
      {
        path: "/products/dressing",
        element: <Dressing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

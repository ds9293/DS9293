// main.jsx
import { createBrowserRouter } from "react-router-dom";
import Contact, { 
  loader as contactLoader,
 } from "./routes/contact";
 import Root, { 
  loader as rootLoader, 
  action as rootAction,
 } from './routes/root';  // Assuming you have these
import ErrorPage from './routes/error';  // Assuming you have an ErrorPage component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

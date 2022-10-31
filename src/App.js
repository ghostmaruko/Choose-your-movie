import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import List from "./List";
import Details from "./Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },

  {
    path: "/",
    element: <Details />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

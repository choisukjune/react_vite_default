import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
    },
//], { basename: "/" + import.meta.env.VITE_A });
]);

console.log(import.meta.env.VITE_A)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Questions from "./pages/Questions";

const router = createBrowserRouter([
    {path: "/", element: <Home/>,},
    {path: "/about-us", element: <AboutUs/>,},
    {path: "/questions", element: <Questions/>,},
]);

export default router;
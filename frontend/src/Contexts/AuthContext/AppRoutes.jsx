import React from 'react';
import { Home } from "../../pages/Home";
import { Curiosities } from "../../pages/Curiosities";
import { Activities } from "../../pages/Activities";
import { Subjects } from "../../pages/Subjects";
import { Us } from "../../pages/Us";
import { LogIn } from "../../pages/Auth/LogIn";
import { Auth } from "../../pages/Auth";
import { NotFound } from "../../pages/NotFound";

const AppRoutes = [
    { path: "/",                name: "Home",           element: <Home />,          isPrivate: false },
    { path: "/curiosities",     name: "Curiosities",    element: <Curiosities />,   isPrivate: false },
    { path: "/activities/*",    name: "Activities",     element: <Activities />,    isPrivate: false },
    { path: "/subjects",        name: "Subjects",       element: <Subjects />,      isPrivate: true },
    { path: "/us/*",            name: "About",          element: <Us />,            isPrivate: false },
    { path: "/auth",            name: "Auth",           element: <LogIn />,         isPrivate: false },
    { path: "/auth/*",          name: "More Auth",      element: <Auth />,          isPrivate: false },
    { path: "/*",               name: "Not found",      element: <NotFound />,      isPrivate: false },
];


export { AppRoutes }
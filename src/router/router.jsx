import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Skills from "../pages/Skills/Skills";
import Education from "../pages/Education/Education";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/ConTact/Contact";
import ProjectDetails from "../pages/Projects/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path:'aboutMe',
                Component: AboutMe,
            },
            {
                path: 'skills',
                Component: Skills
            },
            {
                path: 'education',
                Component: Education,
            },
            {
                path: 'projects',
                Component: Projects
            },
            {
                path: 'projectDetails/:id',
                Component: ProjectDetails

            },
            {
                path: 'contact',
                Component: Contact,
            }
        ]
    },
]);
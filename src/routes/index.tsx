import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CPATH } from "../constants/path";
import LazyLoading from "../utils/lazyLoading";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Home = LazyLoading(lazy(() => import('../pages/home')));
const Signin = LazyLoading(lazy(() => import('../pages/signin')));
const Signup = LazyLoading(lazy(() => import('../pages/signup')));

let routes: () => RouteObject[] = () => [
    {
        path: '/',
        element: <PrivateRoutes />,
        children: [
            {
                path: CPATH.HOME,
                element: <Home />,
            },
        ],
    },

    {
        path: CPATH.SIGNIN,
        element: <PublicRoutes />,
        children: [
            {
                path: CPATH.SIGNIN,
                element: <Signin />,
            },
        ],
    },

    {
        path: CPATH.SIGNUP,
        element: <PublicRoutes />,
        children: [
            {
                path: CPATH.SIGNUP,
                element: <Signup />,
            },
        ],
    },
]
export default routes;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product/Product";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Login/Register";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },

            {
                path:'/about',
                element:<About></About>
            },

            {
                path:'/blog',
                element:<Blog></Blog>
            },

            {
                path:'/contact',
                element:<Contact></Contact>
            },

            {
                path:'/login',
                element:<Login></Login>
            },

            {
                path:'/register',
                element:<Register></Register>
            },

            {
                path:'/category/:id',
               element:<Product></Product>,
                loader: ({params}) => fetch(`https://xanthous-server.vercel.app/category/${params.id}`)
            },
        ]
    }

]);

export default router;
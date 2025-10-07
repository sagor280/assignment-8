import { createBrowserRouter } from "react-router";

import AllApps from "../Pages/AllApps";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([

      {
    path: "/",
        element: <MainLayout />,
     errorElement:<ErrorPage/>,
    children: [
      {
        path:'/home',
        element:<Home/>,
      },
      {
        path: "/allApps",
        element:<AllApps/>,
      },
      
    ],
  },
  
  
 
])
export default router;
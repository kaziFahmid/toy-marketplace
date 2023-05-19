import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import ErrorPage from './components/Error/ErrorPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Blogs from './components/Blogs/Blogs';
import AuthProvider from './components/AuthProvider/AuthProvider';
import AddaToy from './components/AddaToy/AddaToy';
import MyToys from './components/MyToys/MyToys';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ViewDetails from './components/ViewDetails/ViewDetails';
import Alltoys from './components/AllToys/Alltoys';
import AddedToysDetails from './components/AddedToys/AddedToysDetails';
import Update from './components/Update/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <Signup/>
      }
      ,
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/addatoy",
        element: <PrivateRoute><AddaToy/></PrivateRoute>
      },
      {
        path: "/addedtoysdetails/:id",
        element: <PrivateRoute><AddedToysDetails/></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-server-nine.vercel.app/addedtoys/${params.id}`)
      },

      
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys/></PrivateRoute>
      },
      {
        path: "/toys/:id",
        element: <PrivateRoute><ViewDetails/></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-server-nine.vercel.app/toys/${params.id}`)
      },

      {
        path: "/alltoys",
        element: <Alltoys/>
        
      },

      {
        path: "/update/:id",
        element: <PrivateRoute><Update/></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-server-nine.vercel.app/addedtoys/${params.id}`)
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='container-fluid'><AuthProvider><RouterProvider router={router} /></AuthProvider></div>
  


  </React.StrictMode>,
)

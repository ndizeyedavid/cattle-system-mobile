import Login from './routes/Login'
import MyLivestock from './routes/MyLivestock.jsx'
import Track from './routes/Track'
import History from './routes/History'
import ProfilePage from './routes/ProfilePage'

import Settings from './routes/Settings'
import HelpCenter from './routes/HelpCenter'
import Logout from './routes/Logout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from './routes/error'
import { useState } from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLivestock />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/track",
    element: <Track />,
  },
  {
    path: "/track/:id",
    element: <Track />,
  },
  {
    path: "/help",
    element: <HelpCenter />,
  },
  {
    path: "/setting",
    element: <Settings />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

const App = () => {

  // states
  const [isLogin, setIsLogin] = useState(getLoginCookie);

  // creating login cookie
  function setCookie(name, value, expiresInMinutes = 10) {
    const expires = new Date(Date.now() + expiresInMinutes * 60000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    localStorage.setItem('exp', expires.getTime());
  }
  // fetching login cookie
  function getLoginCookie() {
    let cookie = document.cookie.split('=');
    // console.log(cookie[1]);
    return cookie[1];
  }

  function finLogin(key = localStorage.getItem('key')) {
    // console.log("lol: ");
    // console.log(key);
    setCookie('key', key);
    setIsLogin('yes');
    window.location.pathname = '/';
  }

  // Set testing cookie data
  // setCookie("login", "mellow")

  return (
    <>
      {/* <Login /> */}
      {/* {isLogin == undefined || isLogin == 'undefined' ? <Login onComplete={() => finLogin()} /> : <RouterProvider router={router} />} */}
      <RouterProvider router={router} />
    </>
  )
}

export default App

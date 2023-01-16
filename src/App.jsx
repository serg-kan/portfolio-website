import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/root/Root';
import Blog from './components/blog/Blog';
import YouTube from './components/youtube/Youtube';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Error</h2>
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/youtube",
    element: <YouTube />
  },
])


export default function App() {
  return <RouterProvider router={router} />
}
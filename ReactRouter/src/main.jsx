import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Rooms from './rooms/Rooms.jsx'
import About from './about/About.jsx'
import Plans from './plans/Plans.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/rooms',
    element: <Rooms/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/plans',
    element: <Plans/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

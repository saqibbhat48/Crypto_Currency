import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import News from './components/News'
import Exchanges from './components/Exchanges.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/exchanges',
    element: <Exchanges/>
  },
  {
    path: '/news',
    element: <News/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
     <RouterProvider router={router}/>
  // </React.StrictMode>,
)

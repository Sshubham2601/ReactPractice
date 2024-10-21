import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
 import   {BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {path:"",
//       element:<Home/>
//        },
//        {
//         path:"about",
//         element:<About/>
//        },
//        {
//         path:"contact",
//         element:<Contact/>
//        }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path='user/:userId' element={<User/>}/>
          <Route path='Github' element={<Github/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
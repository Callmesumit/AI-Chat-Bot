
import React from 'react';
import Contain from './components/Contain';
import Navbar from './components/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';


const router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/> <Home/></>
  },{
    path:"/home",
    element: <><Navbar/> <Contain/></>
  },
  {
    path:"/contact",
    element:<> <Navbar/> <Contact /> </>
  }
  
])


function App() {
  return (
    <>
     <RouterProvider router={router} />
     <Footer />
    </>
  )
}

export default App;
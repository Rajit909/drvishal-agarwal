import About from './pages/About'
import Home from './components/Home'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import TestimonialsPage from './pages/Testimonials'
import Contact from './pages/Contact'


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/About",
      element: <About/>
    }, 
    {
      path: "/patientfeedback",
      element: <TestimonialsPage/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }
    
  ])
  return (
    <>
    <Navbar/>

      <RouterProvider router={appRouter}/>

    <Footer/>
      
    </>
  )
}

export default App

import About from './pages/About'
import Home from './components/Home'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import TestimonialsPage from './pages/Testimonials'
import Contact from './pages/Contact'
// import { useEffect, useState } from 'react'
// import Modal from './components/Modal.jsx'


function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // useEffect(() => {
  //   // Optional: If you want to delay the modal or add an effect
  //   // setTimeout(() => setIsModalOpen(true), 1000); // Show modal after 1 
  //   setTimeout(() => setIsModalOpen(true), 1000);
  // }, []);

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
    {/* <div >
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div> */}
    
    <Navbar/>
      <RouterProvider router={appRouter}/>
    
    <Footer/>
      
    </>
  )
}

export default App

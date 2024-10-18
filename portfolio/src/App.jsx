import About from './pages/AboutPage'
import Home from './components/Home'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import TestimonialsPage from './pages/TestimonialsPage'
import Contact from './pages/ContactPage'
import News from './pages/News'
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
      path: "/news",
      element: <News/>
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
    
   
    <div>
      <RouterProvider router={appRouter}/>
    </div>
      
    </>
  )
}

export default App

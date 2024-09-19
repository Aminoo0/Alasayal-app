import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './LayOut/Layout'
import ContactUs from './Pages/ContactUs/ContactUs'
import AboutUs from './Pages/AboutUs/AboutUs'
import OurCars from './Pages/OurCars/OurCars'
import CarDetails from './Pages/CarDetails/CarDetails'
import { dataCars } from './Components/OurCarsDetails/OurCarsDetails'
import CategoryContextProvider from './Context/CategoryContext'
import HeaderCaregory from './Pages/HeaderCategory/HeaderCategory'
import { HelmetProvider } from 'react-helmet-async'
import SitelinksSchema from './SitelinksSchema/SitelinksSchema'

let App = () => {

  let router = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'aboutus', element: <AboutUs /> },
        { path: 'contactus', element: <ContactUs /> },
        { path: 'ourcars', element: <OurCars /> },
        { path: `ourcars/:${dataCars.id}/:content`, element: <CarDetails /> },
        { path: `ourcars/:${dataCars.category}`, element: <HeaderCaregory /> },
      ]
    }
  ])

  return (
    <>
      <CategoryContextProvider>
        <HelmetProvider>
          <RouterProvider router={router}>
            <SitelinksSchema />
          </RouterProvider>
        </HelmetProvider>
      </CategoryContextProvider>
    </>
  )
}

export default App

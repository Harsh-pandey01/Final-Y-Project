import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage.jsx'

// Creating the Routes

const router = createBrowserRouter([{
  path : '/' ,
  element : <App />,
  children : [{
    path : '/' ,
    element : <HomePage />
  },{
    path : '/login'
  },{
    path : '/about',
    element : <AboutPage />
  }

]
}])





createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)

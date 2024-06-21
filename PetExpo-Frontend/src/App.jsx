
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DefaultLayout from './DefaultLayout/DefaultLayout'
import Home from './Pages/Home'
import Dogs from './Pages/Animal/Dogs'
import Cats from './Pages/Animal/Cats'
import Birds from './Pages/Animal/Birds'
import NotFound from './Pages/NotFound'
import DogInfo from './Pages/AnimalInfo/DogInfo'
import CatInfo from './Pages/AnimalInfo/CatInfo'
import BirdInfo from './Pages/AnimalInfo/BirdInfo'
import Admin from './Pages/Admin'
const router = createBrowserRouter([
  {
    path:'/',
    element:<DefaultLayout/>,
    errorElement: <NotFound />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'dogs',
        element:<Dogs/>,
      },
      {
        path:'dogs/:name',
        element:<DogInfo/>
      },
      {
        path:'cats',
        element:<Cats/>
      },
      {
        path:'cats/:name',
        element:<CatInfo/>
      },
      {
        path:'birds',
        element:<Birds/>
      },
      {
        path:'birds/:name',
        element:<BirdInfo/>
      },
      {
        path:"admin",
        element:<Admin/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

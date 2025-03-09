import './App.css'
import Body from './Components/Body'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from './Components/Search';
import NewArrivals from './Components/NewArrivals'
import UpComming from './Components/UpComming';

function App() {
  const approuter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/properties",
      element:<Search/>
    },
    {
      path:"/properties/NewArrivals",
      element:<NewArrivals/>
    },
    {
      path:"/properties/UpComming",
      element:<UpComming/>
    },
  ])
  return (
    <RouterProvider router={approuter}/>
  )
}

export default App

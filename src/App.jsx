import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Link } from 'react-router-dom';
import Header from './components/header'
import CallsPage from './routes/calls'
import HomePage from './routes/home'
import ErrorPage from "./error-page";


const HeaderLayout = () => (
  <>
    <header>
      <Header />
    </header>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "calls/",
        element: <CallsPage />,
      },]
  },

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

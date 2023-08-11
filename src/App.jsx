import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Link } from 'react-router-dom';
import Header from './components/layout/header'
import Footer from './components/layout/footer';
import CallsPage from './routes/calls'
import HomePage from './routes/home'

const HeaderLayout = () => (
  <>
    <header>
      <Header />
    </header>
    <Outlet />
    <footer>
      <Footer />
    </footer>
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

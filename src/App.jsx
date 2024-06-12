import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Link } from 'react-router-dom';
import Header from './components/layout/header'
import Footer from './components/layout/footer';
import CallsPage from './routes/calls'
import CallPage from './routes/calls/call';
import IncidentsPage from './routes/incidents'
import HomePage from './routes/home'
import AdsbPage from './routes/adsb';
import FlightPage from './routes/adsb/flight';

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
      },
      {
        path: "call/",
        element: <CallPage />,
      },
      {
        path: "adsb/",
        element: <AdsbPage />,
      },
      {
        path: "adsb/flight",
        element: <FlightPage />,
      },
      {
        path: "incidents/",
        element: <IncidentsPage />,
      }]
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

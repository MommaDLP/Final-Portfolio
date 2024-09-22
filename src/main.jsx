// sets up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// Importing necessary pages. All pages from the pages folder need to be listed here
import App from './App';
import AboutMe from './pages/AboutMe/AboutMe';
// import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
// import Resume from './pages/Resume/Resume';

// Import css styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//Define accessible routes and which components respond to which URL's 
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      // {
      //   path: '/contact',
      //   element: <Contact />,
      // },
      // {
      //   path: '/resume',
      //   element: <Resume />,
      // },
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
); 
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import ErrorPage from '../Pages/ErrorPage';
import AppDetails from '../Component/AppDetails';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage/>,
     hydrateFallbackElement: (
  <div className='fixed inset-0 bg-white bg-opacity-60 z-50 flex items-center justify-center'>
    <span className='loading loading-spinner text-primary w-16 h-16'></span>
  </div>
),
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/product/:id',
        Component: AppDetails,
      },
    ],
  },
]);
export default router;
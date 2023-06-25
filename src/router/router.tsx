import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary, { ErrorType } from '../components/ErrorBoundary';
import { Home } from '../pages';
import NewRelease from '../pages/NewRelease';

import Layout from './layout/Layout';

export const ROUTER_PATH = {
  HOME: '/',
  SEARCH: '/search',
  LIBRARY: '/library',
  NewRelease: '/new-release',
};

const error: ErrorType = {
  isError: true,
  errorInfo: {
    message: 'Page Not Found',
    statusCode: 404,
  },
};

export const router = createBrowserRouter([
  {
    path: ROUTER_PATH.HOME,
    element: <Layout />,
    errorElement: <ErrorBoundary error={error} />,
    children: [
      {
        path: ROUTER_PATH.HOME,
        element: <Home />,
      },
      {
        path: ROUTER_PATH.NewRelease,
        element: <NewRelease />,
      },
    ],
  },
]);

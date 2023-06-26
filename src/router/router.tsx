import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary, { ErrorType } from '../components/ErrorBoundary';
import { Home, NewRelease } from '../pages';

import { Layout } from './index';

export const ROUTER_PATH = {
  HOME: '/',
  SEARCH: '/search',
  LIBRARY: '/library',
  NEW_RELEASE: '/new-release',
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
        path: ROUTER_PATH.NEW_RELEASE,
        element: <NewRelease />,
      },
    ],
  },
]);

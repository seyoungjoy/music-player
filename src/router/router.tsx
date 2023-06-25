import { createBrowserRouter } from 'react-router-dom';

import MusicErrorBoundary, {
  ErrorType,
} from '../components/MusicErrorBoundary';
import { Chart, Home } from '../pages';

import Layout from './layout/Layout';

export const ROUTER_PATH = {
  HOME: '/',
  SEARCH: '/search',
  LIBRARY: '/library',
  CHART: '/chart',
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
    errorElement: <MusicErrorBoundary error={error} />,
    children: [
      {
        path: ROUTER_PATH.HOME,
        element: <Home />,
      },
      {
        path: ROUTER_PATH.CHART,
        element: <Chart />,
      },
    ],
  },
]);

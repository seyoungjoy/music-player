import { createBrowserRouter } from 'react-router-dom';

import { Home, NewRelease } from '../pages';

import Layout from './layout';

export const ROUTER_PATH = {
  HOME: '/',
  SEARCH: '/search',
  LIBRARY: '/library',
  NEW_RELEASE: '/new-release',
};

export const router = createBrowserRouter([
  {
    path: ROUTER_PATH.HOME,
    element: <Layout />,
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

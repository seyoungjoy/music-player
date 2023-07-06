import { createBrowserRouter } from 'react-router-dom';

import { Home, PlayList } from '../pages';

import Layout from './layout';

export const ROUTER_PATH = {
  HOME: '/',
  SEARCH: '/search',
  LIBRARY: '/library',
  PLAYLIST: '/playlist',
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
        path: `${ROUTER_PATH.PLAYLIST}/:id`,
        element: <PlayList />,
      },
      {
        path: '*',
        element: <div>NotFound</div>,
      },
    ],
  },
]);

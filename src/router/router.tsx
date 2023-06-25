import { createBrowserRouter } from 'react-router-dom';

import { Chart, Home } from '../pages';

const ROUTER_PATH = {
  HOME: '/',
  CHART: '/chart',
};

const router = createBrowserRouter([
  {
    path: ROUTER_PATH.HOME,
    element: <Home />,
  },
  {
    path: ROUTER_PATH.CHART,
    element: <Chart />,
  },
]);

export default router;

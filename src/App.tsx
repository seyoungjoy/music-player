import { QueryClientProvider, QueryClient } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import router from './router/router';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

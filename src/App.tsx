import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        suspense: true,
        useErrorBoundary: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

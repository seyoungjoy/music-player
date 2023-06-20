import { QueryClientProvider, QueryClient } from 'react-query';

import Main from './pages/Main';

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
      <Main />
    </QueryClientProvider>
  );
}

export default App;

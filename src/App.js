import Home from './routes/home';
import React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query</h1>
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;

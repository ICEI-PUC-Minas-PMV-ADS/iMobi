import { Toaster } from "react-hot-toast";
import { Router } from "./router"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header>Header</header>
      <Router />
      <footer>Footer</footer>
      <Toaster />
    </QueryClientProvider>
  )
}

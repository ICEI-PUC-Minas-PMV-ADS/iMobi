import { Toaster } from "react-hot-toast";
import { Router } from "./router"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { AuthProvider } from "./app/contexts/AuthContext";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <header>Header</header>
        <Router />
        <footer>Footer</footer>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  )
}

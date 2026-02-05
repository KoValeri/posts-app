import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from '@/App.tsx'

const queryClient = new QueryClient()

export default function AppRouter(){
    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
}
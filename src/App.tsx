import AppRouter from '@/router/AppRouter'
import QueryProvider from '@/providers/QueryProvider'
import './index.css'

export default function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}

import AppRouter from '@/router/AppRouter'
import QueryProvider from '@/providers/QueryProvider'
import ReduxProvider from '@/providers/ReduxProvider'
import './index.css'

export default function App() {
  return (
    <QueryProvider>
      <ReduxProvider>
        <AppRouter />
      </ReduxProvider>
    </QueryProvider>
  );
}

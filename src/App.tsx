import { Outlet } from '@tanstack/react-router'
import Header from '@/components/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>

  );
}

import { Outlet } from '@tanstack/react-router'
import Header from '@/components/Header/Header'

import SupportChat from '@/components/Chat/SupportChat'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <SupportChat />
    </>

  );
}

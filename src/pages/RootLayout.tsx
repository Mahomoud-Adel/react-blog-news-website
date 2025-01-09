import Navbar from '@/components/widgets/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RootLayout
import { Outlet } from "react-router";
import Leftbar from "../../component/leftbar/leftbar";
import Topbar from "../../component/topbar/topbar";

const MainLayout = () => {
  return (
    <div className='flex w-full p-0'>
      <Leftbar />
      <div className='content bg-gray-20 flex-1'>
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout;
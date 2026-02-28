import { LogOut, MoveDown, User, User2Icon } from "lucide-react";
import { useState } from "react";
import Image from "../image/image";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import useAuthStore from "../../utils/authStore";
function UserButton() {
  const [open, setOpen] = useState(false);
  const {currUser,removeCurrUser} = useAuthStore();
  const navigate = useNavigate();
  const fetch = async()=>{
    const res = await toast.promise(
      axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/users/auth/logout`,
        {},{withCredentials:true}
      ),
      {
        pending: "Logout is pending",
        success: "Logout Succesfully",
        error: "Logout Failed!! Some error occured",
      }
    );
    if (res.status === 200) {
      setTimeout(() => {
        removeCurrUser();
        navigate("/login");
      }, 2000);
    }
    return res.data;
  }
  const handleLogout = async ()=>{
    await fetch();
  }
  return currUser ? (
    <div className="flex gap-4 items-center relative ">
      <Link className="cursor-pointer" to={`${currUser.username}`}>
        <User />
      </Link>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="cursor-pointer"
      >
        <Image path="/general/arrow.svg" alt="Arrow" />
      </div>
      {open && (
        <div
          className="flex flex-col justify-center absolute top-full shadow-sm shadow-gray-300  right-0 bg-white border-1 border-gray-300 rounded-2xl p-4 font-sm"
          style={{ zIndex: "999" }}
        >
          <div className="flex p-2 gap-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer text-gray-800 font-light">
            <User2Icon />
            Profile
          </div>

          <div className="flex p-2 gap-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer text-gray-800 font-light " onClick={handleLogout}>
            <LogOut />
            LogOut
          </div>
        </div>
      )}
      <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
    </div>
  ) : (
    <div className="flex gap-2 items-center">
      <Link to="/login" className="bg-red-500 text-white py-4 px-6 rounded-2xl">
        Login
      </Link>
      <Link to="/register" className="bg-gray-300 text-white py-4 px-6 rounded-2xl"> Sign Up</Link>
    </div>
  );
}

export default UserButton;

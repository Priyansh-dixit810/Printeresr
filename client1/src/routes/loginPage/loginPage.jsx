import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import useAuthStore from "../../utils/authStore";
function LoginPage() {
  const navigate = useNavigate();
  const {setCurrUser} = useAuthStore()
  const fetch = async (data) => {
    const res = await toast.promise(
      axios.post(`${import.meta.env.VITE_API_ENDPOINT}/users/auth/login`, data, {withCredentials: true}),
      {
        pending: "Login is pending",
        success: "Logged in Succesfully",
        error: "User Not Found!!"
      }
    );
    if(res.status===200){
      setCurrUser(res.data);
      setTimeout(()=>{
        navigate("/")
      },2000)
    }
    return res.data;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await fetch(data);
  };
  return (
    <div className="h-screen flex justify-center items-center relative py-5">
      <div className="w-[561px] shadow-2xl rounded-3xl flex flex-col gap-3 items-center ">
        <img src="/general/logo.png" alt="logo" className="w-8 h-8"></img>
        
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold text-4xl text-center">Add Account</h1>
            <h3 className="text-center">Have Pinterest account? Log in</h3>
            <form className="w-full mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="flex flex-col items-start justify-evenly px-6 gap-2">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="border-1 border-gray-500 w-full rounded-2xl p-3"
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-evenly px-6 gap-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create a password"
                  className="border-1 border-gray-500 w-full rounded-2xl p-3"
                  required
                ></input>
              </div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 cursor-pointer text-white p-3 rounded-xl">
              Continue
            </button>
            </form>
        
          </div>
        <small className="text-center px-10">
          By continuing, you agree to Pinterest's Terms of Service and
          acknowledge that you've read our Privacy Policy. Notice at collection.
        </small>
      </div>
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
  );
}

export default LoginPage;

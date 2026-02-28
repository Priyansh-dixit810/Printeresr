import axios from "axios";
import { Info } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import useAuthStore from "../../utils/authStore";
function Register() {
  const navigate = useNavigate();
  const {setCurrUser} = useAuthStore()
  const [info, setInfo] = useState("hidden");
  const [tips, setTips] = useState("hidden");
  const [formData, setFormData] = useState({
    displayname: "",
    username: "",
    email: "",
    password: "",
    date: "",
  });
  const fetch = async () => {
    const res = await toast.promise(
      axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/users/auth/register`,
        { formData },
        { withCredentials: true }
      ),
      {
        pending: "Registration is pending",
        success: "User Registered Succesfully",
        error: "User Not Registered!! Some error occured",
      }
    );
    if (res.status === 201) {
      setCurrUser(res.data);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    return res.data;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch();
  };
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="w-[561px] shadow-2xl rounded-3xl flex flex-col gap-3 items-center ">
        <img src="/general/logo.png" alt="logo" className="w-8 h-8"></img>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-4xl text-center">
            Create a new personal account
          </h1>
          <h3>Find new ideas to try</h3>
          <form
            className="w-full mt-4 flex flex-col gap-3 px-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-start justify-evenly px-6 gap-2">
              <label htmlFor="displayname">Name</label>
              <input
                type="text"
                name="displayname"
                id="displayname"
                placeholder="Name"
                className="border-1 border-gray-500 w-full rounded-2xl p-3"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start justify-evenly px-6 gap-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="border-1 border-gray-500 w-full rounded-2xl p-3"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col items-start justify-evenly px-6 gap-2">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="border-1 border-gray-500 w-full rounded-2xl p-3"
                onChange={handleChange}
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
                onChange={handleChange}
                required
              ></input>
              <small className="text-gray-500">
                Use 8 or more letters, numbers and symbols
              </small>
            </div>
            <div
              className="px-7 flex gap-3 items-center cursor-pointer"
              onClick={() => setTips("")}
            >
              <p>Password Tips</p>
              <Info size={16} />
            </div>
            <div className="flex flex-col items-start relative justify-evenly px-6 gap-2">
              <div className="flex gap-3 items-center">
                <label htmlFor="date">Date of birth</label>
                <Info
                  size={20}
                  onMouseEnter={() => setInfo("inline-block")}
                  onMouseLeave={() => setInfo("hidden")}
                />
              </div>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Create a password"
                className="border-1 border-gray-500 w-full rounded-2xl p-3"
                onChange={handleChange}
                required
              ></input>
              <small className="text-gray-500">
                Use 8 or more letters, numbers and symbols
              </small>
            </div>
            <button
              type="submit"
              className=" bg-red-600 hover:bg-red-700 cursor-pointer text-white p-3 rounded-xl"
            >
              Continue
            </button>
          </form>
          <p
            className={`text-xs left-1/2 top-3/5 w-1/4 md:w-1/6 rounded-xl p-3 bg-black text-white absolute ${info}`}
          >
            To help keep Pinterest safe, we now require your date of birth. Your
            date of birth also helps us provide more personalised
            recommendations and relevant ads. We won't share this information
            without your permission and it won't be visible on your profile.
          </p>
          <div
            className={`bg-black/80 absolute inset-0 flex items-center justify-center z-10 ${tips}`}
          >
            <div className="p-4 rounded-2xl bg-white text-black flex flex-col gap-4">
              <div className="flex flex-col gap-6">
                <h2 className="font-semibold">Password Tips</h2>
                <p>
                  A strong password helps keep your account safe. Use at least 8
                  letters, numbers and symbols.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-semibold">What to avoid</h2>
                <ul className="px-4 list-disc">
                  <li>Common passwords, words and names</li>
                  <li>Recent dates or dates associated with you</li>
                  <li>Simple patterns and repeated text</li>
                </ul>
                <button
                  className="w-full bg-red-600 hover:bg-red-700 cursor-pointer text-white p-3 rounded-xl"
                  onClick={() => {
                    setTips("hidden");
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
            position="bottom-right"
            autoClose={3000}
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

export default Register;

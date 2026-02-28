import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import Gallery from "../../component/gallery/gallery";
import Board from "../../component/board/board";
import { useParams } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function ProfilePage() {
  const [active, setActive] = useState("Created");
  const { username } = useParams();
  const fetchPin = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/users/${username}`
    , {withCredentials: true});
    return res.data;
  };
  const { isPending, error, data } = useQuery({
    queryKey: ["user", username],
    queryFn: fetchPin,
  });
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error loading pin</p>;
  if (!data) return "User not found!";
  return (
    <div className="p-4">
      {/* Profile */}
      <div className="flex flex-col w-full items-center justify-evenly gap-4">
        {/* ProfileImage */}
        <img src={data.img || "/general/noAvatar.png"} className="w-32 h-32 rounded-full" />
        {/* ProfileName */}
        <h1 className="text-3xl font-semibold">{data.displayname}</h1>
        {/* Username */}
        <div className="flex gap-1 items-center">
          <img src="/general/logo.png" className="w-5 h-5 grayscale" />
          <span className="text-gray-500">{data.username}</span>
        </div>
        {/* Followers */}
        <div className="flex gap-1 items-center">
          <span className="font-semibold">13 followers</span>
          <span className="">· 0 following</span>
        </div>
        {/* Buttons */}
        <div className="flex items-center gap-8">
          <div className="hidden cursor-pointer rounded-xl hover:bg-gray-100 w-12 h-12 sm:flex items-center justify-center">
            <img src="/general/share.svg" className="w-8 h-8 font-light" />
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-200 hover:bg-gray-300/95  text-lg rounded-2xl px-4 py-3 cursor-pointer pointer-events-auto">
              Message
            </button>
            <button className="bg-red-600 hover:bg-red-700/95 text-white text-lg rounded-2xl px-4 py-3 cursor-pointer pointer-events-auto">
              Follow
            </button>
          </div>
          <div className="hidden cursor-pointer rounded-xl hover:bg-gray-100 w-12 h-12 sm:flex items-center justify-center">
            <MoreHorizontal />
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="w-full flex bg-white py-10 sticky z-10 top-20 flex-col justify-center items-center">
        <div className="gap-6 flex">
          <span
            className={`text-xl cursor-pointer ${
              active === "Created" ? "border-b-2 " : ""
            }`}
            onClick={() => {
              setActive("Created");
            }}
          >
            Created
          </span>
          <span
            className={`text-xl cursor-pointer ${
              active === "Saved" ? "border-b-2 " : ""
            }`}
            onClick={() => {
              setActive("Saved");
            }}
          >
            Saved
          </span>
        </div>
      </div>
      {active === "Created" ? (
        <Gallery
          userId = {data._id}
          className={
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 px-6 gap-4 mt-8"
          }
        />
      ) : (
        <Board userId= {data._id} />
      )}
    </div>
  );
}

export default ProfilePage;

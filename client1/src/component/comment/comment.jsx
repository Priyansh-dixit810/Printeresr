import { SendHorizonal, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { Link } from "react-router";
import Image from "../image/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";
import useAuthStore from "../../utils/authStore";
function Comment({ id }) {
  const [open, setOpen] = useState(false);
  const [description, setdescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const { currUser } = useAuthStore();
  const handleEmoji = ({ emoji }) => {
    setdescription((c) => c + emoji);
  };
  const handleInput = (e) => {
    setdescription(e.target.value);
  };

  const handlereviews = async (e) => {
    /* if (comment.trim() !== "") {
      setReviews((prev) => [...prev, comment]);
      setComment("");
    } */
    e.preventDefault();
    console.log(description);
    console.log(id);
    const res = await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/comment/add`,
      { description, pinId: id },
      { withCredentials: true }
    );
    if(res.status===201){
      console.log(setdescription(""))
    }
    console.log(res);
  };
  
  const fetchComment = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/comment/${id}`
    );
    return res.data;
  };
  const { isPending, error, data } = useQuery({
    queryKey: ["comment", id],
    queryFn: fetchComment,
  });
  if (isPending) return <p>Loading...</p>;
  if (error) {
    return <p>Error loading comment</p>;
  }
  if (!data) return "No comment!";
  return (
    <div className="flex flex-col gap-4">
      {/* {!reviews.length ? (
        <></>
      ) : (
        <>
          <h1 className="font-semibold text-xl">{reviews.length} comments</h1>
          <div className="flex flex-col p-1 gap-2 max-h-[500px]  overflow-y-auto">
            {reviews.map((review, index) => (
              <div key={index} className="flex items-center gap-3">
                <Link className="flex gap-2">
                  <div className="rounded-full bg-blue-300 flex items-center justify-center p-2 text-xs">
                    P
                  </div>
                  <h1 className="font-semibold text-lg">Priyansh Dixit</h1>
                </Link>
                {review}
              </div>
            ))}
          </div>
        </>
      )} */}
      {!data.length ? (
        <>"No comments"</>
      ) : (
        <>
          <h1 className="font-semibold text-xl">{data.length} comments</h1>
          <div className="flex flex-col p-1 gap-2 max-h-[500px]  overflow-y-auto">
            {data.map((item) => (
              <div key={item._id}>
                <div className="flex items-center gap-3">
                  <Image
                    src={item.user.img}
                    path={"/general/noAvatar.png"}
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <h1 className="font-semibold text-lg">
                    {item.user.displayname}
                  </h1>
                  {item.description}
                </div>
                <span className="mx-8 text-gray-500">
                  {format(item.createdAt)}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="border border-gray-300 p-3 rounded-4xl flex justify-between gap-2">
        <input
          placeholder={"Add a comment"}
          className="w-full outline-0"
          id="comment"
          value={description}
          onChange={handleInput}
        />
        <div className="flex relative gap-2 items-center">
          <Smile
            onClick={() => {
              setOpen(!open);
            }}
            className="cursor-pointer"
          />
          {open ? (
            <div className="top-9 right-0 absolute z-20 bg-white cursor-pointer">
              <EmojiPicker
                open="False"
                searchPlaceholder="Select an emoji"
                onEmojiClick={handleEmoji}
              />
            </div>
          ) : null}
          {description.length === 0 ? (
            <></>
          ) : (
            <div
              className="bg-red-600 p-1 rounded-lg text-white cursor-pointer"
              onClick={handlereviews}
            >
              <SendHorizonal className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;

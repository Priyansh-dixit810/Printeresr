import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";
import Image from "../image/image";
import "./board.css";
import { format } from "timeago.js";
function Board({userId}) {
    const fetchPin = async () => {
        const res = await axios.get(
            `${import.meta.env.VITE_API_ENDPOINT}/board/${userId}`
        )
        return res.data;
    }
    const {isPending,error,data} = useQuery({
        queryKey: ['boards'],
        queryFn: fetchPin,
    });
    if (isPending) return <p>Loading...</p>;
    if (error) return <p>Error loading pin</p>;
    if (!data) return "Board is empty!";
    return (
    <div className="collections">
      {/* COLLECTION */}
      {data?.map((board) => (
        <Link
          to={`/search?boardId=${board.firstPin._id}`}
          className="collection"
          key={board._id}
        >
          <Image src={board.firstPin.media} alt="" />
          <div className="collectionInfo">
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} Pins · {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
    );
}

export default Board;
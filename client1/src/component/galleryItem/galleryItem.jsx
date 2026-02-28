import { Link } from "react-router";
import Image from "../image/image";

function GalleryItem({ item }) {
  return (
    <div
      className="flex relative group cursor-pointer "
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image src={item.media} w={438} h={(500 * item.height)/item.width} alt={item.id} className={"rounded-xl "}/>
      <Link
        to={`/pin/${item._id}`}
        className="absolute inset-0 bg-gray-500/30 opacity-0 group-hover:opacity-100 transition rounded-xl"
      ></Link>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition rounded-xl flex pointer-events-none"
        style={{ zIndex: "10" }}
      >
        <div className="p-4 flex flex-col justify-between items-end w-full ">
          <button className="bg-red-600 hover:bg-red-700/95 text-white text-lg rounded-2xl px-4 py-3 cursor-pointer pointer-events-auto">
            Save
          </button>
          <div className="flex gap-2 items-center">
            <div className="bg-white rounded-xl hover:bg-white/90 p-2 pointer-events-auto">
              <img src="/general/share.svg"></img>
            </div>
            <div className="bg-white rounded-xl p-2 hover:bg-white/90 pointer-events-auto">
              <img src="/general/more.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;

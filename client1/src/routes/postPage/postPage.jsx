import { Link, useParams } from "react-router";
import Image from "../../component/image/image";
import { ArrowLeft, ArrowUpRight, Search } from "lucide-react";
import PostInteraction from "../../component/postInteraction/postInteraction";
import Comment from "../../component/comment/comment";
import Gallery from "../../component/gallery/gallery";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


function PostPage() {
  const { id } = useParams();
  const fetchPin = async ()=>{
    const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pin/${id}`, {withCredentials: true});
    return res.data;
  }
  const {isPending,error,data} = useQuery({
    queryKey: ["pin", id],
    queryFn: fetchPin,
  })

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error loading pin</p>;
  if (!data) return "Pin not found!";
  const item = data.pin;
  return (
    <div className="p-4">
      <div className="flex gap-4">
      <div className="hidden sm:block py-4 px-2 h-full">
        <Link to="/">
        <ArrowLeft className="cursor-pointer hover:bg-gray-200 hover:rounded-md"/>
        </Link>
      </div>
      {/* Image Card */}
      <div className="w-full lg:w-4xl">
        <div className="border-1 border-gray-300 rounded-3xl flex flex-col  p-2 items-center w-full">
          <PostInteraction />
          <div className="relative">
            <Image src={item.media} w={item.width/10} h={item.height/10} className="rounded-3xl w-full h-auto object-cover"/>
            <div className="flex flex-col">
              <div className="absolute bottom-18 right-2 cursor-pointer">
                  <div className="bg-gray-200/40 relative w-13 h-13 hover:w-40 transition-all duration-200 flex items-center justify-center rounded-2xl group ">
                    <ArrowUpRight className="w-8 h-8 absolute right-2"/>
                    <span className="text-lg absolute opacity-0 group-hover:opacity-100 transition-all ">View Larger</span>
                  </div>
              </div>
              <div className="absolute bottom-2 right-2 cursor-pointer">
                  <div className="bg-gray-200/40 relative w-13 h-13 hover:w-40 transition-all duration-200 flex items-center justify-center rounded-2xl group ">
                    <Search className="w-8 h-8 absolute right-2"/>
                    <span className="text-lg absolute opacity-0 group-hover:opacity-100 transition-all ">Explore</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="w-full p-2">
            <Link className="flex gap-2">
              <Image path="/general/noAvatar.png" w={25} h={25} />
              <span>Priyansh Dixit</span>
            </Link>
            <hr className="text-gray-300 my-4 "/>
            <Comment id={item._id}/>
          </div>
        </div>
        {/* Gallery */}
        {/* <div className="flex-1 mt-3">
          <Gallery className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"}/>
        </div> */}
      </div>
      {/* Gallery */}
      {/* <div className="hidden  xl:inline-block flex-1 w-full ">
        <Gallery className={"grid grid-cols-1 gap-2 2xl:grid-cols-2"}/>
      </div> */}
      </div>
    </div>
  );
}

export default PostPage;

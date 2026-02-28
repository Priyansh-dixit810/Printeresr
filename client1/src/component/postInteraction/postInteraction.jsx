import { Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";

function PostInteraction() {
    return (
        <div className="w-full sticky z-40 top-20 rounded-t-2xl pt-2 mb-1 px-4 bg-white flex justify-between items-center ">
        <div className="flex gap-8 overflow-hidden">
            <div className="flex gap-2 items-center">
            <div className="group  cursor-pointer">
                <Heart className="w-7 h-7" />
                <div className="top-full absolute  mt-5 hidden group-hover:block bg-black text-white p-2 rounded-lg text-sm z-50">
                React
                </div>
            </div>
            <span className="font-semibold">273</span>
            </div>
            <div className="group cursor-pointer">
                <MessageCircle className="w-7 h-7"/>
                <div className="top-full left-20 absolute  mt-5 hidden group-hover:block bg-black text-white p-2 rounded-lg text-sm z-50">
                Comment
                </div>
            </div>
             <div className="group cursor-pointer">
                <Send className="w-7 h-7"/>
                <div className="top-full left-40 absolute  mt-5 hidden group-hover:block bg-black text-white p-2 rounded-lg text-sm z-50">
                Share
                </div>
            </div>
            <div className="group cursor-pointer">
                <MoreHorizontal className="w-7 h-7"/>
                <div className="top-full left-60 absolute  mt-5 hidden group-hover:block bg-black text-white p-2 rounded-lg text-sm z-50">
                More actions
                </div>
            </div>
            
        </div>
        <div>
        <button className="bg-red-600 hidden md:inline-block hover:bg-red-700/95 text-white text-lg rounded-2xl px-4 py-3 cursor-pointer pointer-events-auto">
            Save
        </button>
        </div>
        </div>
    );
}

export default PostInteraction;
import GalleryItem from "../galleryItem/galleryItem";
import "./gallery.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const fetchPins = async ({pageParam,search,userId,boardId}) => {
  const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pin?cursor=${pageParam}&search=${search || ""}&user=${userId || ""}&board=${boardId || ""}`, {withCredentials: true});
  return res.data;
};

function Gallery({ className,search,userId,boardId }) {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins",search,userId,boardId],
    queryFn: ({pageParam = 0})=>fetchPins({pageParam,search,userId,boardId}),
    initialPageParam: 0,
    getNextPageParam : (lastPage) => lastPage.nextCursor,
  });
  if (status === "pending") {
    return "Loading...";
  }
  if (status === "error") {
    return "Something went wrong";
  }
  const allPins = data?.pages.flatMap((page)=>page.pins) || []; 
    

  return (
    <InfiniteScroll dataLength={allPins.length} next={fetchNextPage} hasMore={!!hasNextPage} loader={<h3>Loading...</h3>} endMessage={<p>All Posts Loaded</p>}>
    <div className={className}>
      {allPins.map((item) => (
        <GalleryItem key={item._id} item={item} />
      ))}
    </div>
    </InfiniteScroll>
  );
}

export default Gallery;

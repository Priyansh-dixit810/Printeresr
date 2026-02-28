import { useSearchParams } from "react-router";
import Gallery from "../../component/gallery/gallery"
function SearchPage() {
    let [searchParams] = useSearchParams();
    const search = searchParams.get("search")
    const boardId = searchParams.get("boardId")
    return (
        <Gallery search={search} boardId={boardId} className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 px-6 gap-4 mt-8"} />
    );
}

export default SearchPage;
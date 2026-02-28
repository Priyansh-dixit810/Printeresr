import { Search} from "lucide-react"
import UserButton from "./user";
import './topbar.css'
import { useNavigate } from "react-router";
function Topbar() {
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/search?search=${e.target[0].value}`)
    }
    return (
        <div className="flex items-center gap-4 sticky top-0 px-6 py-4 z-50 bg-white">
            <form onSubmit={handleSubmit}className="bg-gray-100 rounded-2xl flex-1 p-4 flex gap-2 items-center">
            <Search className="w-6 h-6 text-gray-500"/>
            <input placeholder="Search" className="search outline-none font-medium text-lg "/>
            </form>
            <UserButton />
        </div>
    );
}

export default Topbar;
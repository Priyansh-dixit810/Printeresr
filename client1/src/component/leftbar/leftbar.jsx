import { Bell, Book, BookmarkPlusIcon, Home, MessageCircleMore, PlusSquare, Settings } from 'lucide-react';
import "./leftbar.css"
function Leftbar() {
    return (
        <div className="flex flex-col h-screen justify-between items-center top-0 sticky border-r-1 border-r-gray-300 " style={{padding: "16px"}}>
            <div className='flex flex-col gap-8' style={{padding: "0px"}}>
            <a href="/" className="nav_log">
                <img src="/general/logo.png" className="w-7 h-7"/>
            </a>
            <a href="/" className="nav_log">
                <Home className="w-7 h-7"/>
            </a>
            <a href="/"className=" nav_log">
                 <Book  className="w-7 h-7"/>
            </a>
            <a href="/create"className="nav_log">
                <PlusSquare  className="w-7 h-7"/>
            </a>
            <a href="/"className="nav_log">
                <Bell className="w-7 h-7"/>
            </a>
            <a href="/"className="nav_log">
                <MessageCircleMore className="w-7 h-7 bg-gray-5"/>
            </a>
            </div>
            <div className='nav_log'>
                <Settings />
            </div>
        </div>
    );
}

export default Leftbar;
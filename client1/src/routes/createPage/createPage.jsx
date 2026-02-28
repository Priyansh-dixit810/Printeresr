import {ArrowLeftRight, ArrowUp, Plus} from "lucide-react"
function CreatePage() {
    return (
        <div className="flex justify-between gap-2 border-t-gray-300 border-t-1">
            <div className="w-13/14">
                <div className="px-4 py-6 border-b-1 border-b-gray-300">
                    <h1 className="font-semibold text-2xl">Create Pin</h1>
                </div>
                <div className="flex flex-col lg:flex-row p-6 gap-4 lg:items-start items-center w-full justify-center h-full">
                    <div className="w-[375px]  rounded-3xl flex flex-col bg-[#e9e9e9] border-dotted border-2 border-gray-400 cursor-pointer">
                        <div className="flex flex-col items-center justify-center mt-56 gap-8">
                                <ArrowUp className="ring-3 rounded-full"/>
                                <p className="text-center">Choose a file or drag and drop it here</p>
                        </div>
                        <div className="hidden flex-1 p-10 text-center sm:flex items-end justify-end">
                            We recommend using high-quality .jpg files less than 20 MB or .mp4 files less than 200 MB.
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                    <form className="w-full flex flex-col justify-start items-start gap-6">
                        <div className="flex flex-col border-1 p-3 w-full border-gray-400 rounded-2xl">
                            <label>Title</label>
                            <input type="text" name="text" placeholder="Add a title" className="outline-none" ></input>
                        </div>
                        <div className="w-full">
                            <label htmlFor="description" className="text-sm">Description</label>
                            <div className="flex flex-col border-1 p-3 border-gray-400 rounded-2xl">
                                <textarea type="text" name="description" id="description" placeholder="Add a detailed description" className="outline-none"></textarea>
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="link" className="text-sm">Link</label>
                            <div className="flex flex-col border-1 p-3 border-gray-400 rounded-2xl">
                                <input type="text" name="link" id="link" placeholder="Add a link" className="outline-none"></input>
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="board" className="text-sm">Board</label>
                            <div className="flex flex-col border-1 p-3 border-gray-400 rounded-2xl">
                                <input type="text" name="board" id="board" placeholder="Add a board" className="outline-none"></input>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col border-1 p-3 w-full border-gray-400 rounded-2xl">
                                <label htmlFor="topics" className="text-sm">Tagged topics</label>
                                <input type="text" name="topics" id="topics" placeholder="Add some topics" className="outline-none"></input>
                            </div>
                            <small className="text-gray-500 p-3">Don't worry, people won't see your tag</small>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <div className="w-1/14 border-l-1 border-l-gray-300 fixed top-23 right-0 h-screen">
                <div className="flex flex-col items-center gap-16 border-b-1 mt-6 pb-6 border-b-gray-300">
                    <ArrowLeftRight />
                    <Plus className="w-8 h-8"/>
                </div>
            </div>
        </div>
    );
}

export default CreatePage;
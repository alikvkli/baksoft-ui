export default function EntryLoader() {
    return (
        <aside className="w-full bg-white rounded-md shadow-md flex animate-pulse">
        <div className="bg-[#f6f7f8] max-h-full p-2 flex flex-col items-center justify-center gap-2 sm:gap-4">
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></div>
        </div>

        <div className="w-full flex flex-col p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-16 h-4 sm:w-20 sm:h-5 bg-gray-300 rounded-md"></div>
                    <div className="w-16 h-4 sm:w-20 sm:h-5 bg-gray-300 rounded-md"></div>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></div>
            </div>

            <div className="w-full sm:w-3/4 h-4 sm:h-5 bg-gray-300 rounded-md"></div>
            <div className="mt-4 w-full h-3 sm:h-3.5 bg-gray-300 rounded-md"></div>
            <div className="mt-2 w-full sm:w-2/3 h-3 sm:h-3.5 bg-gray-300 rounded-md my-4"></div>

            <div className="mt-auto flex flex-row items-center justify-between border-t pt-2.5 gap-2 sm:gap-0">
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-4 h-3 sm:w-12 sm:h-4 bg-gray-300 rounded-md"></div>
                    <div className="w-4 h-3 sm:w-12 sm:h-4 bg-gray-300 rounded-md"></div>
                    <div className="w-4 h-3 sm:w-12 sm:h-4 bg-gray-300 rounded-md"></div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-16 h-5 sm:w-20 sm:h-6 bg-gray-300 rounded-md"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    </aside>
    )
}

export default function EntryToolLoader() {
    return (
        <section className="w-[305px] fixed h-[calc(100vh-84px)] right-0 bottom-0 shrink-0 bg-white shadow-md pt-4 hidden lg:flex lg:flex-col animate-pulse">
            <div className="px-4 flex gap-4 items-start border-b border-[#EAEAEA] pb-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="mt-auto border-t border-[#D9D9D9] w-full">
                <div className="border-b border-[#D9D9D9] flex gap-4 px-4 py-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
                <div className="w-full h-24 bg-gray-300 rounded p-4"></div>
                <div className="w-full h-10 bg-gray-300 rounded mt-2"></div>
            </div>
        </section>
    )
}
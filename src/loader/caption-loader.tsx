export default function CaptionLoader() {
    return (
        <div className="flex items-center gap-4 justify-between max-md:px-4 pl-12 pr-5 py-3">
            <div className="flex w-full items-center gap-1.5">
                <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}
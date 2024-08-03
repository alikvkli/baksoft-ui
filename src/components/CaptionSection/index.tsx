import { captions } from "@/constants/mocks";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function CaptionSection() {
    return (
        <>
            <div className="pl-12 pr-4 max-md:pl-4">
                <div className="relative">
                    <input type="text" className="peer w-full text-black text-sm pl-6 max-md:pl-4  focus:pl-7 py-2 px-0.5 rounded-md transition-all  border-[1px] border-transparent placeholder:text-black focus:placeholder:text-[#808080] focus:outline-none focus:ring-0 focus:border-[#F48023]" placeholder="Arama..." />
                    <CiSearch size={18} className="absolute transition-all  left-0 max-md:-left-2 peer-focus:text-[#808080] peer-focus:left-2 top-1/2 -translate-y-1/2" />
                </div>
            </div>

            <p className="px-12  text-sm mt-7 text-[#808080] max-md:px-4">BUGÜN</p>

            <div className="flex mt-2.5 flex-col gap-2 max-h-[calc(100vh-210px)] max-md:h-full overflow-y-auto">
                {captions.map((item, key) => (
                    <Link to="/" key={key} className="max-md:px-4 px-12 transition-all py-3 hover:border-l-4 hover:border-[#F48023] hover:bg-[#FCF4EC] text-black text-sm hover:text-[#F48023] hover:font-semibold">
                        {item.text}
                    </Link>
                ))}

            </div>

        </>
    )
}
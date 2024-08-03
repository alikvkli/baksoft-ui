import { GoHash } from "react-icons/go";
import { FaVolleyball } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoLaw } from "react-icons/go";
import { GiMusicalNotes } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { MdScience } from "react-icons/md";


export default function HashtagSection() {
    return (
        <>
            <p className="flex items-center gap-4 text-[#808080] pb-3 border-b border-[#EAEAEA]">
                <GoHash />
                Popüler Etiketler
            </p>
            <div className="flex flex-col gap-4 mt-2.5">

                <div className="flex items-center gap-4">
                    <div className="bg-[#5A4F43] flex items-center justify-center w-8 h-8 p-[6px] rounded-md">
                        <FaVolleyball size={18} className="fill-[#EEA956]" />
                    </div>
                    <div className="flex-col">
                        <Link to="/etiket" className="text-black font-semibold text-sm">#spor</Link>
                        <p className="text-[#97989D] text-xs">87,654 İçerik</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-[#444F5F] flex items-center justify-center w-8 h-8 p-[6px] rounded-md">
                        <GiMusicalNotes size={18} className="fill-[#5D95E8]" />
                    </div>
                    <div className="flex-col">
                        <Link to="/etiket" className="text-black font-semibold text-sm">#müzik</Link>
                        <p className="text-[#97989D] text-xs">87,654 İçerik</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-[#574D42] flex items-center justify-center w-8 h-8 p-[6px] rounded-md">
                        <MdOutlineTravelExplore size={18} className="fill-[#EA942C]" />
                    </div>
                    <div className="flex-col">
                        <Link to="/etiket" className="text-black font-semibold text-sm">#seyehat</Link>
                        <p className="text-[#97989D] text-xs">87,654 İçerik</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-[#335248] flex items-center justify-center w-8 h-8 p-[6px] rounded-md">
                        <BiMoviePlay size={18} className="fill-[#3ED6A4]" />
                    </div>
                    <div className="flex-col">
                        <Link to="/etiket" className="text-black font-semibold text-sm">#sinema</Link>
                        <p className="text-[#97989D] text-xs">87,654 İçerik</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-[#46475B] flex items-center justify-center w-8 h-8 p-[6px] rounded-md">
                        <MdScience size={18} className="fill-[#848DF9]" />
                    </div>
                    <div className="flex-col">
                        <Link to="/etiket" className="text-black font-semibold text-sm">#bilim</Link>
                        <p className="text-[#97989D] text-xs">87,654 İçerik</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-[#473E3B] flex items-center justify-center w-8 h-8 p-[6px] rounded-md">
                        <GoLaw size={18} className="fill-[#FF8F67]" />
                    </div>
                    <div className="flex-col">
                        <Link to="/etiket" className="text-black font-semibold text-sm">#siyaset</Link>
                        <p className="text-[#97989D] text-xs">87,654 İçerik</p>
                    </div>
                </div>


            </div>
        </>
    )
}
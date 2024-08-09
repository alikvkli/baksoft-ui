import PublicLayout from "@/layouts/PublicLayout"
import CaptionSection from "@/components/CaptionSection";
import { MdOutlineArticle } from "react-icons/md";

import { MdOutlineAddAPhoto } from "react-icons/md";
import { GoMention } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { RiHashtag } from "react-icons/ri";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdAddLink } from "react-icons/md";
import { Button } from "@/components/Button";
import { BsSendPlus } from "react-icons/bs";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";
import CaptionCard from "@/components/CaptionCard";


export default function CaptionDetail() {
  return (
    <PublicLayout>
      <div className="flex justify-between h-[calc(100vh-84px)]">
        <section className="w-[310px] shrink-0 bg-white shadow-md pt-8 pb-10 max-md:hidden">
          <CaptionSection />
        </section>
        <section className="w-full bg-[#fafafa] max-h-[calc(100vh-84px)] overflow-y-auto px-8 pt-4 pb-8 max-md:px-4 max-md:pb-20">
          <div className="bg-white shadow-md rounded-md  px-4 py-2.5 flex items-center gap-4">
            <button type="button" className="flex items-center text-sm gap-2 text-[#808080] hover:bg-[#F48023] hover:rounded-md hover:text-white transition-all px-1.5 py-0.5">
              <FaArrowDownShortWide />
              Eski - Yeni
            </button>
            <button type="button" className="flex items-center text-sm gap-2 text-[#808080] hover:bg-[#F48023] hover:rounded-md hover:text-white transition-all px-1.5 py-0.5">
              <FaArrowDownWideShort />
              Yeni - Eski
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {Array.from({length:5}).map((_,index) => (
              <CaptionCard  key={index}/>
            ))}
          </div>
        </section>
        <section className="w-[305px] h-full shrink-0 bg-white shadow-md pt-4 hidden  lg:flex lg:flex-col">
          <div className="px-4 flex gap-4 items-start border-b border-[#EAEAEA] pb-3">
            <MdOutlineArticle size={24} className="fill-[#79747E]" />
            <p className="text-sm text-[#79747E]">superman shazam the return of black adam</p>
          </div>
          <div className="mt-auto border-t border-[#D9D9D9] w-full">
            <div className="border-b border-[#D9D9D9] flex gap-4 px-4 py-3">
              <button type="button">
                <MdOutlineAddAPhoto size={18} />
              </button>
              <button type="button">
                <GoMention size={18} />
              </button>
              <button type="button">
                <FaYoutube size={18} />
              </button>
              <button type="button">
                <RiHashtag size={18} />
              </button>
              <button type="button">
                <MdOutlinePostAdd size={18} />
              </button>
              <button type="button">
                <MdAddLink size={18} />
              </button>
            </div>
            <textarea rows={4} className="w-full outline-none p-1.5" placeholder={`"superman shazam the return of black adam" başlığına entry giriniz...`}></textarea>
            <Button buttonText="Entry Oluştur" className="w-full rounded-none" suffixIcon={{ icon: BsSendPlus, size: 18 }} />
          </div>
        </section>
      </div>


    </PublicLayout>
  )
}
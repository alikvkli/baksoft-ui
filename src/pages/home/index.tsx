import { SelectButton } from "@/components/SelectButton";
import PublicLayout from "@/layouts/PublicLayout"
import { FaRegClock } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import HashtagSection from "@/components/HashtagSection";
import CaptionCard from "@/components/CaptionCard";
import CaptionSection from "@/components/CaptionSection";



export default function HomePage() {
  return (
    <PublicLayout>
      <div className="flex justify-between h-[calc(100vh-84px)]">
        <section className="w-[310px] shrink-0 bg-white shadow-md pt-8 pb-10 max-md:hidden">
          <CaptionSection />
        </section>
        <section className="w-full bg-[#fafafa] max-h-[calc(100vh-84px)] overflow-y-auto px-8 pt-4 pb-8 max-md:px-4 max-md:pb-20">
          <div className="flex items-center gap-3 sticky top-0">
            <SelectButton
              id="today"
              buttonText="Bugün"
              className="text-sm"
              prefixIcon={{
                icon: FaRegClock
              }}
            />
            <SelectButton
              id="discover"
              buttonText="Keşfet"
              className="text-sm"
              prefixIcon={{
                icon: GoArrowUpRight,
                size: 18
              }}
            />
            <SelectButton
              id="trends"
              buttonText="Gündem"
              className="text-sm"
              prefixIcon={{
                icon: FaHotjar
              }}
            />
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {Array.from({ length: 12 }).map((_, key) => (
              <CaptionCard key={key} />
            ))}
          </div>
        </section>
        <section className="w-[305px] shrink-0 bg-white shadow-md py-8 px-8 hidden  lg:block">
          <HashtagSection />
        </section>
      </div>


    </PublicLayout>
  )
}
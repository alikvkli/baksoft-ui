import { GoHash } from "react-icons/go";
import { Link } from "react-router-dom";
import { getIconComponent } from "@/lib/load-icon";
import { useHashtags } from "@/features/caption/query";



export default function HashtagSection() {
    const { data, isLoading, error, isFetching } = useHashtags();

    return (
        <>
            <p className="flex items-center gap-4 text-[#808080] pb-3 border-b border-[#EAEAEA]">
                <GoHash />
                Popüler Etiketler
            </p>
            <div className="flex flex-col gap-4 mt-2.5">
                {error ? (
                    <div className="flex items-center text-sm max-md:px-4 pl-12 pr-4 py-3 text-[#808080]">
                        <p>Veriler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
                    </div>
                ) : data?.payload.length === 0 ? (
                    <div className="flex items-center text-sm max-md:px-4 pl-12 pr-4 py-3 text-[#808080]">
                        <p>Gösterilecek veri mevcut değil.</p>
                    </div>
                ) : isFetching || isLoading ? (
                    Array(6).fill(0).map((_, index) => (
                        <div className="flex items-center gap-4 animate-pulse" key={index}>
                            <div className="bg-[#5A4F43] flex items-center justify-center w-8 h-8 p-[6px] rounded-md" />

                            <div className="flex flex-col gap-1">
                                <div className="w-24 rounded-sm h-3.5 bg-gray-300" />
                                <div className="w-12 rounded-sm h-3.5 bg-gray-300" />
                            </div>
                        </div>
                    ))
                ) : (
                    data?.payload?.map((item, key) => {
                        const IconComponent = getIconComponent(item.icon.name.slice(0, 2).toLowerCase(), item.icon.name);
                        return (
                            <div className="flex items-center gap-4" key={key}>
                                <div
                                    className="bg-[#5A4F43] flex items-center justify-center w-8 h-8 p-[6px] rounded-md"
                                    style={{ backgroundColor: item.icon.backgroud_color }}>
                                    {IconComponent && <IconComponent size={18} style={{ color: item.icon.text_color }} />}
                                </div>
                                <div className="flex-col">
                                    <Link to="/" className="text-black font-semibold text-sm">#{item.name.toLocaleLowerCase()}</Link>
                                    <p className="text-[#97989D] text-xs">{item.caption_count} İçerik</p>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </>
    )
}
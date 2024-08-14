import { Link, useLocation } from "react-router-dom";
import { VscPinnedDirty } from "react-icons/vsc";
import { Caption } from "@/common/types";

const CaptionLink = ({ item }: { item: Caption }) => {
    const location = useLocation();
    const isActive = location.pathname === `/${item.slug}--${item.caption_id}`;

    return (
        <Link
            to={`/${item.slug}--${item.caption_id}`}
            key={item.caption_id}
            className={`flex items-center justify-between max-md:px-4 pl-12 pr-5 transition-all py-3 ${isActive ? 'border-l-4 border-[#F48023] bg-[#FCF4EC] text-sm text-[#F48023] font-semibold' : 'hover:border-l-4 hover:border-[#F48023] hover:bg-[#FCF4EC] text-black text-sm hover:text-[#F48023] hover:font-semibold'
                }`}>
            <div className="flex items-center gap-1.5">
                {item.is_featured ? <VscPinnedDirty size={16} /> : ''}
                {item.name}
            </div>
            <span>{item.entry_count}</span>
        </Link>
    );
};

export default CaptionLink;

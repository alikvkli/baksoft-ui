import { CiSearch } from "react-icons/ci";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setActiveTab, setCaptionPagination, setSearch } from "@/features/caption";
import { filterParameter } from "@/features/caption/mock";
import { FiRefreshCcw } from "react-icons/fi";
import { TbFilterX } from "react-icons/tb";
import { IoCloseCircleOutline } from "react-icons/io5";
import CaptionLink from "./caption-link";
import { useCaptions } from "@/features/caption/query";
import CaptionLoader from "@/loader/caption-loader";


export default function CaptionSection() {

    const dispatch = useAppDispatch();
    const { pagination, filter } = useAppSelector(state => state.caption);

    const { data, error, isLoading, isFetching, refetch } = useCaptions({
        page: pagination.current_page,
        activeTab: filter.activeTab,
        searchTerm: filter.search
    });

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.last_page) {
            dispatch(setCaptionPagination({
                ...pagination,
                current_page: newPage
            }
            ));
        }
    };

    const handleFilterClear = () => {
        dispatch(setActiveTab('newest'))
        dispatch(setSearch(''));
    }

    const handleSearch = () => {
        refetch();
    }



    return (
        <>
            <div className="pl-12 pr-4 max-md:pl-4">
                <div className="relative flex">
                    <input
                        type="text"
                        value={filter.search}
                        className="peer w-full text-black text-sm pl-2.5 max-md:pl-4  py-2 px-0.5 rounded-l-md transition-all  border-[0.5px] placeholder:text-[#808080] focus:outline-none focus:ring-0 border-[#F48023]"
                        placeholder="Arama..."
                        onChange={(e) => {
                            e.preventDefault();
                            dispatch(setSearch(e.target.value));
                        }} />

                    {filter.search.length > 1 && (
                        <button
                            type="button"
                            className="absolute right-11  text-[#F48023] top-1/2 -translate-y-1/2"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(setSearch(""));
                                setTimeout(() => {
                                    refetch();
                                }, 100)
                            }}>
                            <IoCloseCircleOutline size={18} />
                        </button>
                    )}

                    <button onClick={handleSearch} type="button" className="text-white rounded-r-md bg-[#F48023] py-2 px-2.5">
                        <CiSearch size={18} />
                    </button>
                </div>
            </div>

            <div className="pl-12 pr-4 mt-7 max-md:px-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <p className="text-sm  text-[#808080] uppercase">{filterParameter[filter.activeTab]}</p>
                    <button
                        onClick={() => refetch()}
                        disabled={isLoading || isFetching}
                        type="button"
                        className="flex items-center text-[#808080] transition-all hover:bg-[#F48023]/90 hover:text-white p-1.5 rounded-full disabled:cursor-not-allowed">
                        <FiRefreshCcw size={12} />
                    </button>
                    {filter.activeTab !== 'newest' && (
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                handleFilterClear();
                            }}
                            disabled={isLoading || isFetching}
                            type="button"
                            className="flex items-center text-[#808080] transition-all hover:bg-[#F48023]/90 hover:text-white p-1.5 rounded-full disabled:cursor-not-allowed">
                            <TbFilterX size={15} />
                        </button>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handlePageChange(pagination.current_page - 1)}
                        disabled={pagination.current_page === 1 || isLoading || isFetching}
                        type="button"
                        className="flex items-center text-[#808080] transition-all hover:bg-[#F48023]/90 hover:text-white p-1.5 rounded-full disabled:cursor-not-allowed disabled:bg-red-100 disabled:text-red-500">
                        <MdKeyboardDoubleArrowLeft size={16} />
                    </button>
                    <button
                        onClick={() => handlePageChange(pagination.current_page + 1)}
                        disabled={pagination.current_page === pagination.last_page || isLoading || isFetching}
                        type="button"
                        className="flex items-center text-[#808080] transition-all hover:bg-[#F48023]/90 hover:text-white p-1.5 rounded-full disabled:cursor-not-allowed disabled:bg-red-100 disabled:text-red-500">

                        <MdKeyboardDoubleArrowRight size={16} />
                    </button>

                </div>
            </div>

            <div className="flex mt-2.5 flex-col gap-2 max-h-[calc(100vh-220px)] max-md:h-full overflow-y-auto">

                {error ? (
                    <div className="flex items-center text-sm max-md:px-4 pl-12 pr-4 py-3 text-[#808080]">
                        <p>Veriler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
                    </div>
                ) : data?.payload?.length === 0 ? (
                    <div className="flex items-center text-sm max-md:px-4 pl-12 pr-4 py-3 text-[#808080]">
                        <p>Gösterilecek veri mevcut değil.</p>
                    </div>
                ) : (isLoading || isFetching) ? (
                    Array(11).fill(0).map((_, index) => (
                        <CaptionLoader key={index} />
                    ))
                ) : (
                    data?.payload?.map((item, key) => (
                        <CaptionLink item={item} key={key} />
                    ))
                )}


            </div>

        </>
    )
}
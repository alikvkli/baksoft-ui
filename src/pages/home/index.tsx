import { SelectButton } from "@/components/SelectButton";
import PublicLayout from "@/layouts/PublicLayout"
import { FaRegClock, FaHotjar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import HashtagSection from "@/components/HashtagSection";
import CaptionCard from "@/components/CaptionCard";
import CaptionSection from "@/components/CaptionSection";
import { filterParameter } from "@/features/caption/mock";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setActiveTab } from "@/features/caption";
import { useEntries } from "@/features/entry/query";
import { Fragment, useEffect, useRef } from "react";
import EntryLoader from "@/loader/entry-loader";


export default function HomePage() {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(state => state.caption);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    status,
    error
  } = useEntries();

  const handleChangeTab = (item: keyof typeof filterParameter) => {
    dispatch(setActiveTab(item))
  }

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);

    return () => observerRef.current?.disconnect();
  }, [fetchNextPage, hasNextPage]);


  return (
    <PublicLayout>
      <div className="flex justify-between">
        <section className="w-[310px] fixed left-0 bottom-0 h-[calc(100vh-84px)] shrink-0 bg-white shadow-md pt-8 pb-10 max-md:hidden">
          <CaptionSection />
        </section>
        <section className="w-full bg-[#fafafa] pl-[326px] lg:pr-[321px] pt-[100px] pb-8 md:pr-4 max-md:px-4 max-md:pb-20">
          <div className="flex items-center gap-3 sticky top-[100px] left-0 right-0 bottom-0">
            {Object.keys(filterParameter).filter(item => item !== 'newest').map((item, key) => {
              if (item === "today") {
                return (
                  <SelectButton
                    selected={filter.activeTab === "today"}
                    onClick={(event) => { event.preventDefault(); handleChangeTab(item); }}
                    key={key}
                    id="today"
                    buttonText={filterParameter[item]}
                    className="text-sm"
                    prefixIcon={{
                      icon: FaRegClock
                    }}
                  />
                )
              } else if (item === "discover") {
                return (
                  <SelectButton
                    selected={filter.activeTab === "discover"}
                    onClick={(event) => { event.preventDefault(); handleChangeTab(item); }}
                    key={key}
                    id="discover"
                    buttonText="Keşfet"
                    className="text-sm"
                    prefixIcon={{
                      icon: GoArrowUpRight,
                      size: 18
                    }}
                  />
                )
              } else if (item === "popular") {
                return (
                  <SelectButton
                    selected={filter.activeTab === "popular"}
                    onClick={(event) => { event.preventDefault(); handleChangeTab(item); }}
                    key={key}
                    id="popular"
                    buttonText="Gündem"
                    className="text-sm"
                    prefixIcon={{
                      icon: FaHotjar
                    }}
                  />
                )
              }
            })}
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {isLoading ? (
              Array(4).fill(0).map((_, index) => (
                <EntryLoader key={index} />
              ))
            ) : (
              data?.pages.map((page, pageIndex) => (
                <Fragment key={pageIndex}>
                  {page.payload.map((item, key) => (
                    <CaptionCard caption={item.caption} user={item.user} entry={item.entry} key={key} />
                  ))}
                </Fragment>
              ))
            )}
          </div>
          <div className="flex flex-col gap-4 mt-4" ref={loadMoreRef}>
            {isFetchingNextPage ? (
              Array(4).fill(0).map((_, index) => (
                <EntryLoader key={index} />
              ))
            ) : (
              hasNextPage && <p>Scroll down to load more...</p>
            )}
          </div>
        </section>
        <section className="w-[305px] fixed h-[calc(100vh-84px)] right-0 bottom-0 shrink-0 bg-white shadow-md py-8 px-8 hidden  lg:block">
          <HashtagSection />
        </section>
      </div>


    </PublicLayout>
  )
}
import PublicLayout from "@/layouts/PublicLayout"
import CaptionSection from "@/components/CaptionSection";

import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";
import CaptionCard from "@/components/CaptionCard";
import { useCaptionEntries } from "@/features/entry/query";
import { useLocation, useParams } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import EntryLoader from "@/loader/entry-loader";
import classNames from "classnames";
import { CgSpinner } from "react-icons/cg";
import EntryToolLoader from "@/loader/entry-tool-loader";
import EntryTool from "./entry-tool";


export default function CaptionDetail() {
  const { caption_slug } = useParams<string>();
  const prevLocationRef = useRef<string | null>(null);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [orderBy, setOrderBy] = useState<'asc' | 'desc'>('asc');

  const location = useLocation();

  const caption_id = Number(caption_slug?.split("--")[1]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isRefetching,
    status,
    error,
    refetch
  } = useCaptionEntries({ caption_id: caption_id, orderBy: orderBy });

  useEffect(() => {
    if (prevLocationRef.current && prevLocationRef.current !== location.pathname) {
      setShouldRefetch(true);
    }
    prevLocationRef.current = location.pathname;
  }, [location]);

  useEffect(() => {
    if (shouldRefetch) {
      refetch();
      setShouldRefetch(false);
    }
  }, [shouldRefetch, refetch]);


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

  const handleChangeOrderBy = (data: typeof orderBy) => {
    setOrderBy(data);
  }


  return (
    <PublicLayout>
      <div className="flex justify-between h-[calc(100vh-84px)]">
        <section className="w-[310px] fixed left-0 bottom-0 h-[calc(100vh-84px)] shrink-0 bg-white shadow-md pt-8 pb-10 max-md:hidden">
          <CaptionSection />
        </section>
        <section className="w-full  pl-[326px] lg:pr-[321px] pt-[100px] md:pr-4 max-md:px-4">

          <aside className="bg-white shadow-md rounded-md  px-4 py-2.5 flex items-center justify-between">

            <div className="flex items-center gap-4">
              <button type="button" onClick={() => handleChangeOrderBy('asc')}
                className={classNames('flex items-center text-sm gap-2 text-[#808080] hover:bg-[#F48023] hover:rounded-md hover:text-white transition-all px-1.5 py-0.5', {
                  'bg-[#F48023] rounded-md text-white': orderBy === 'asc'
                })}>
                <FaArrowDownShortWide />
                Eski - Yeni
              </button>
              <button onClick={() => handleChangeOrderBy('desc')} type="button"
                className={classNames('flex items-center text-sm gap-2 text-[#808080] hover:bg-[#F48023] hover:rounded-md hover:text-white transition-all px-1.5 py-0.5', {
                  'bg-[#F48023] rounded-md text-white': orderBy === 'desc'
                })}>
                <FaArrowDownWideShort />
                Yeni - Eski
              </button>
            </div>
            {isRefetching && <CgSpinner className="animate-spin" color="#F48023" size={24} />}
          </aside>

          <aside className="max-md:pb-20 pb-8">
            <div className="flex flex-col gap-4 mt-4">
              {isLoading ? (
                Array(4).fill(0).map((_, index) => (
                  <EntryLoader key={index} />
                ))
              ) : (
                data?.pages.map((page, pageIndex) => (
                  <Fragment key={pageIndex}>
                    {page.payload.map((item, key) => (
                      <CaptionCard hide={{ captionName: true }} caption={page.caption} entry={item.entry} user={item.user} key={key} />
                    ))}
                  </Fragment>
                ))
              )}
            </div>
            <div className="flex flex-col gap-4 mt-4" ref={loadMoreRef}>
              {isFetchingNextPage || isRefetching ? (
                Array(3).fill(0).map((_, index) => (
                  <EntryLoader key={index} />
                ))
              ) : (
                hasNextPage && <p>Scroll down to load more...</p>
              )}
            </div>
          </aside>


        </section>
        {isLoading ? <EntryToolLoader /> : <EntryTool caption={data?.pages?.[0]?.caption} />}
      </div>


    </PublicLayout>
  )
}
import { FetchEntriesByCaptionProps, FetchEntriesByCaptionRequestProps, FetchEntryProps, FetchEntryRequestProps } from "@/features/entry/query/index.type";
import { useInfiniteQuery, UseInfiniteQueryResult } from "@tanstack/react-query";
import axios from "axios";

const fetchEntries = async (props: FetchEntryRequestProps): Promise<FetchEntryProps> => {
    const { page } = props;

    const params: { [key: string]: any } = {};
    if (page !== undefined) params.page = page;

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/entry`, {
        params
    });
    return response.data;
};



export const useEntries = () => {

    const result: UseInfiniteQueryResult<FetchEntryProps, Error> = useInfiniteQuery<FetchEntryProps, Error>(
        ['entries'],
        ({ pageParam = 1 }) => fetchEntries({ page: pageParam }),
        {
            staleTime: 60000,
            refetchInterval: 60000 * 2,
            keepPreviousData: true,
            getNextPageParam: (lastPage) => {
                return lastPage.pagination?.current_page < lastPage.pagination?.last_page
                    ? lastPage.pagination.current_page + 1
                    : undefined;
            },
            onSuccess: (data) => {
                const lastPage = data.pages[data.pages.length - 1];
                console.log("last page", lastPage)
            },
        }
    );
    return result;
}


const fetchEntriesByCaption = async (props: FetchEntriesByCaptionRequestProps): Promise<FetchEntriesByCaptionProps> => {
    const { page, caption_id, orderBy, searchTerm } = props;

    const params: { [key: string]: any } = {};
    if (page !== undefined) params.page = page;
    if (orderBy !== undefined) params.orderBy = orderBy;
    if (searchTerm !== "") params.search = searchTerm;

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/caption/${caption_id}`, {
        params
    });
    return response.data;
};


export const useCaptionEntries = (props: Omit<FetchEntriesByCaptionRequestProps, 'page'>) => {
    const { orderBy, searchTerm, caption_id } = props;

    const result: UseInfiniteQueryResult<FetchEntriesByCaptionProps, Error> = useInfiniteQuery<FetchEntriesByCaptionProps, Error>(
        ['caption_entries', orderBy, searchTerm],
        ({ pageParam = 1 }) => fetchEntriesByCaption({ caption_id, page: pageParam, orderBy, searchTerm }),
        {
            staleTime: 60000,
            refetchInterval: 60000 * 2,
            keepPreviousData: true,
            enabled: !!caption_id,
            getNextPageParam: (lastPage) => {
                return lastPage.pagination?.current_page < lastPage.pagination?.last_page
                    ? lastPage.pagination.current_page + 1
                    : undefined;
            },
            onSuccess: (data) => {
                const lastPage = data.pages[data.pages.length - 1];
                console.log(lastPage)
            },
        }
    );
    return result;
}
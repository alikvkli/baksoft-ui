import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { FetchCaptionProps, FetchCaptionRequestProps, FetchHashtagProps } from '@/features/caption/query/index.type';
import { useAppDispatch } from '@/hooks';
import { setCaptionPagination } from '@/features/caption';

const fetchCaptions = async (props: FetchCaptionRequestProps): Promise<FetchCaptionProps> => {
    const { page, activeTab, searchTerm } = props;

    const params: { [key: string]: any } = {};
    if (page !== undefined) params.page = page;
    if (activeTab !== "") params.tab = activeTab;
    if (searchTerm !== "") params.search = searchTerm;

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/caption`, {
        params
    });
    return response.data;
};


export const useCaptions = (props: FetchCaptionRequestProps) => {
    const dispatch = useAppDispatch();
    const { page, activeTab, searchTerm } = props;
    const result: UseQueryResult<FetchCaptionProps, Error> = useQuery<FetchCaptionProps, Error>(
        ['captions', page, activeTab],
        () => fetchCaptions({ page, activeTab, searchTerm }),
        {
            staleTime: 60000,
            refetchInterval: 60000 * 2,
            keepPreviousData: true,
            onSuccess: (data) => {
                dispatch(setCaptionPagination(data.pagination));
            },
        }
    );
    return result;
}


const fetchHashtags = async (): Promise<FetchHashtagProps> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/hashtag`, {
        params: {
            page: 1
        }
    });
    return response.data;
};

export const useHashtags = () => {
    const result: UseQueryResult<FetchHashtagProps, Error> = useQuery<FetchHashtagProps, Error>(
        ['hashtags'],
        () => fetchHashtags(),
        {
            staleTime: 60000,
            refetchInterval: 60000 * 2,
            keepPreviousData: true,
        }
    );
    return result;
}





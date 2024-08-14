import { Caption, Hashtag, Pagination } from "@/common/types";

export interface FetchCaptionProps {
    payload: Caption[];
    pagination: Pagination;
}
export interface FetchHashtagProps{
    payload: Hashtag[];
    pagination: Pagination;
}

export interface FetchCaptionRequestProps {
    page: number,
    activeTab: string
    searchTerm: string
}
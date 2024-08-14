import { Caption, Entry, Pagination } from "@/common/types";

export interface FetchEntryProps {
    payload: Entry[];
    pagination: Pagination;
}

export interface Stats {
    up_vote: number
    down_vote: number
    comment_count: number
}


export interface FetchEntryRequestProps {
    page: number
}


export interface FetchEntriesByCaptionProps {
    caption: Caption;
    payload: Entry[]
    pagination: Pagination;
}

export interface FetchEntriesByCaptionRequestProps {
    page: number;
    caption_id: number;
    orderBy: 'asc' | 'desc'
    searchTerm?: string
}
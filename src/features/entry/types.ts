import { Pagination } from "@/common/types";

export interface InitialStateProps {
    pagination: Pagination;
    caption_entries_pagination: Pagination;
    entry: {
        images: string[],
        users: number[]
    }
}






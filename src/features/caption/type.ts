import { Pagination } from "@/common/types";
import { filterParameter } from "@/features/caption/mock";

export interface InitialStateProps {
    pagination: Pagination;
    filter: {
        activeTab: keyof typeof filterParameter;
        search: string;
    }
}

export interface Icon {
    name: string
    backgroud_color: string
    text_color: string
}





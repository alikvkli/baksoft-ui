import { Caption, EntryItem, User } from "@/common/types";

export interface ICaptionCard {
    entry: EntryItem
    user: User
    caption: Caption

    hide?: {
        captionName: boolean;
    }
}
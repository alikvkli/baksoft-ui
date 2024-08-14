import { Icon } from "@/features/caption/type"
import { Stats } from "@/features/entry/query/index.type"

export interface Entry {
    entry: EntryItem
    caption: Caption
    user: User
}

export interface EntryItem {
    entry_id: number
    content: string
    status: number
    is_featured: number
    stats: Stats
    created_at: string
    updated_at: string
}

export interface User {
    user_id: number
    name: string
    surname: string
    username: string
    avatar: string
    email: string
    role: string
}

export interface Caption {
    caption_id: number
    name: string
    slug: string
    entry_count: number
    status: number
    is_featured: number
    order: string
    created_at: string
    updated_at: string
}

export interface Hashtag {
    hashtag_id: number
    name: string
    slug: string
    icon: Icon
    caption_count: number
    status: number
    order: string
    created_at: string
    updated_at: string
}

export interface Pagination {
    current_page: number
    per_page: number
    total: number
    last_page: number
}

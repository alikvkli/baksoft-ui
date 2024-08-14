import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "@/features/caption/type";


const initialState: InitialStateProps = {
    pagination: {
        current_page: 1,
        per_page: 12,
        total: 0,
        last_page: 1,
    },
    filter: {
        activeTab: 'newest',
        search: ''
    }
}

const captionSlice = createSlice({
    name: "caption",
    initialState,
    reducers: {
        setCaptionPagination: (state, action: PayloadAction<InitialStateProps['pagination']>) => {
            state.pagination = action.payload;
        },
        setActiveTab: (state, action: PayloadAction<InitialStateProps['filter']['activeTab']>) => {
            if (state.filter.activeTab === action.payload) {
                state.filter.activeTab = "newest";
            } else {
                state.filter.activeTab = action.payload;
            }
        },
        setSearch: (state, action: PayloadAction<InitialStateProps['filter']['search']>) => {
            state.filter.search = action.payload;
        },
    }
});

export const {
    setCaptionPagination,
    setActiveTab,
    setSearch
} = captionSlice.actions;

export default captionSlice.reducer;
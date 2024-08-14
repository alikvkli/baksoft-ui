import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "./types";


const initialState: InitialStateProps = {
    pagination: {
        current_page: 1,
        per_page: 6,
        total: 0,
        last_page: 1,
    },
    caption_entries_pagination: {
        current_page: 1,
        per_page: 6,
        total: 0,
        last_page: 1,
    },
    entry: {
        images: [],
        users: []
    }
}

const entrySlice = createSlice({
    name: "caption",
    initialState,
    reducers: {
        setEntryPagination: (state, action: PayloadAction<InitialStateProps['pagination']>) => {
            state.pagination = action.payload;
        },
        setCaptionEntryPagination: (state, action: PayloadAction<InitialStateProps['caption_entries_pagination']>) => {
            state.pagination = action.payload;
        },
        setEntry: (state: InitialStateProps, action: PayloadAction<{ key: keyof InitialStateProps['entry'], value: InitialStateProps['entry'][keyof InitialStateProps['entry']] }>) => {
            const { key, value } = action.payload;

            state.entry = {
                ...state.entry,
                [key]: [
                    ...state.entry[key],
                    value
                ]
            };
        }
    }
});

export const {
    setEntryPagination,
    setCaptionEntryPagination,
    setEntry
} = entrySlice.actions;

export default entrySlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSideBarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isSideBarCollapsed: false,
    isDarkMode: false,
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        // Basically a function that changes the Global store state. This mainly triggers on some kind of action that is performed by the user and updates the global state.
        setIsSidebarCollapsed: (state, actions: PayloadAction<boolean>) => {
            state.isSideBarCollapsed = actions.payload;
        },
        setIsDarkMode: (state, actions: PayloadAction<boolean>) => {
            state.isDarkMode = actions.payload;
        },
    },
});

export const { setIsDarkMode, setIsSidebarCollapsed } = globalSlice.actions;

export default globalSlice.reducer;
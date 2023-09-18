import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Redux-store";

// Define a type for the slice state

export interface actionState {
  SignUp: boolean;
  Image_src: {
    data: string;
    isMobile: boolean;
  };
  ChooseOption: string;
  SearchQuery: string;
  StarMode: string;
  StarColor: string;
  MobileMenu: boolean;
}

// Define the initial state using that type
const initialState: actionState = {
  SignUp: false,
  Image_src: {
    data: "",
    isMobile: false,
  },
  ChooseOption: "All",
  SearchQuery: "",
  StarMode: "",
  StarColor: "",
  MobileMenu: false,
};

export const actionSlice = createSlice({
  name: "action",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSignUp: (state: actionState, action) => {
      state.SignUp = action.payload;
    },
    set_Image_src: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.Image_src = action.payload;
    },
    setChooseOption: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.ChooseOption = action.payload;
    },
    setSearchQuery: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.SearchQuery = action.payload;
    },
    setStarMode: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.StarMode = action.payload;
    },
    setStarColor: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.StarColor = action.payload;
    },
    setMobileMenu: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.MobileMenu = action.payload;
    },
  },
});

export const {
  setSignUp,
  set_Image_src,
  setChooseOption,
  setSearchQuery,
  setStarMode,
  setStarColor,
  setMobileMenu,
} = actionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const SignUp_data = (state: RootState) => state.action.SignUp;
export const Image_src_data = (state: RootState) => state.action.Image_src;
export const SearchQuery_data = (state: RootState) => state.action.SearchQuery;
export const StarMode_data = (state: RootState) => state.action.StarMode;
export const StarColor_data = (state: RootState) => state.action.StarColor;
export const MobileMenu_data = (state: RootState) => state.action.MobileMenu;
export const ChooseOption_data = (state: RootState) =>
  state.action.ChooseOption;

export default actionSlice.reducer;

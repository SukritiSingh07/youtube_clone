import {configureStore, createSlice} from "@reduxjs/toolkit";
import { InitialState } from "../types";
import { getHomePageVideo } from "./Reducers/getHomePageVideos";

const initialState: InitialState={
    videos: [],
    currentPlaying: null, 
    searchTerm: "",
    searchResults: [],
    nextPageToken: null, 
    recommendedVideos: [],
};

const YoutubeSlice = createSlice({
    name: "YoutubeApp",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getHomePageVideo.fulfilled,(state, action)=>{
            // state.videos= action.payload.parsedData;
            // state.nextPageToken=action.payload.nextPageToken;
        });
    },
});

export const store= configureStore({
    reducer:{
        youtubeApp: YoutubeSlice.reducer,
    },
});

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;
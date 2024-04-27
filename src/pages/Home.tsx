import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideo } from '../store/Reducers/getHomePageVideos';

export default function Home() {
    const dispatch= useAppDispatch();
    const videos= useAppSelector((state)=> state.youtubeApp.videos);

    useEffect(()=>{
        dispatch(getHomePageVideo(false));
    },[dispatch]);

    return (
        <div className="max-h-screen overflow-hidden">
            <div style={{ height: "7.5vh" }}>
                <Navbar />
            </div>
            <div className="flex" style={{height: "92.5vh"}}>
                <Sidebar />
            </div>
        </div>
    )
}
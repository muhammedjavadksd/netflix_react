import React, { useState } from 'react'
import BlockSlider from '../BlockSlider/BlockSlider'
import './assets/css/style.css'
import constant from '../../CONST/const'
import Youtube from 'react-youtube';
import axios from '../../CONST/axios';
import { VideoPlayerContext } from '../../CONST/Context';


function Content() {


    let [videoPlayer, videoUpdate] = useState(null);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };


    let moveiCategory = [
        {
            title: 'Trending',
            highLights: true,
            url: constant.trending
        },
        {
            title: 'Action',
            highLights: false,
            url: constant.ActionMovies
        },
        {
            title: 'Originals',
            highLights: false,
            url: constant.originals
        },
        {
            title: 'Comedy Movies',
            highLights: false,
            url: constant.ComedyMovies
        },
        {
            title: 'Horror Movies',
            highLights: false,
            url: constant.HorrorMovies
        },
        {
            title: 'Romance Movies',
            highLights: false,
            url: constant.RomanceMovies
        },
        {
            title: 'Documentaries',
            highLights: false,
            url: constant.Documentaries
        },

    ]


    let onVideoPlay = function (videoId) {
        videoUpdate(videoId)
    }

    return (
        <div id='blockContent'>
            <div className="container_main">

                <VideoPlayerContext.Provider value={onVideoPlay}>
                    {
                        videoPlayer != null ? <Youtube videoId={videoPlayer} opts={opts}> </Youtube> : ""
                    }
                    {

                        moveiCategory.map(function (data) {
                            return (
                                <BlockSlider title={data.title} highLights={data.highLights} url={data.url} />
                            )
                        })
                    }
                </VideoPlayerContext.Provider>
            </div>
        </div>
    )
}

export default Content

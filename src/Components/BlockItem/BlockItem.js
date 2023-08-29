
import React, { useContext, useState, lazy, Suspense } from 'react'
import './assets/css/style.css'
import constant from '../../CONST/const';
import axios from '../../CONST/axios';
import { VideoPlayerContext } from '../../CONST/Context';
import { LazyLoadImage } from 'react-lazy-load-image-component';



function BlockItem(props) {

    let [isHovers, setHover] = useState(false);

    function mouseEnter() {
        setHover(true)
    }

    function mouseLeave() {
        setHover(false)
    }

    let overView = props.data.overview
    overView = props.isHigh ? overView.slice(0, 60) + "..." : overView.slice(0, 90) + "...";

    let videoContext = useContext(VideoPlayerContext)

    //onVideoPlay

    function itemClick(moveiID) {
        axios.get(`movie/${moveiID}/videos?api_key=ec716edca0b43d1e6897ce769f81606c`).then(function (data) {
            console.log(data);
            let videoId = data.data.results[0].key;
            videoContext(videoId);
        })
    }


    let image = props.isHigh ? (constant.imageUrl + props.data.backdrop_path) : constant.imageUrl + props.data.poster_path

    return (
        <div
            onMouseOver={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={() => {
                itemClick(props.data.id)
            }}

            className='itemMovei'>
            <div className="topImage" > 
                <img loading="lazy" className='imageTopBanner' src={image} alt="" />
            </div>
            <div className="detailMovei" style={{ display: isHovers ? 'block' : 'none' }}>
                <div className="contentMovei">
                    <h4>{props.data.title}</h4>
                    <h6>
                        {overView}
                    </h6>

                    <button className='watchNow'>Watch Now</button>
                </div>
            </div>
        </div>
    )
}

export default BlockItem

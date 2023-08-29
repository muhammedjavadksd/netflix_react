import React, { useEffect, useState } from 'react';
import './assets/css/Banner.css'
import axios from '../../CONST/axios';
import constant from '../../CONST/const';

function Banner() {

    let [bannerItem, bannerState] = useState({})

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    useEffect(function () {
        axios.get(constant.trending).then(function (data) {
            let randomTrendingData = data.data.results[randomNumber(0, 19)]; 
            bannerState(randomTrendingData)
        })
    }, [])


    return (
        <section id='banner' loading="lazy" style={{ backgroundImage: `url('${constant.imageUrl + bannerItem.backdrop_path}')` }}>
            <div className="BannerBg">

            </div>
            <div className="container_main">
                <div className="centerHeading">
                    <div className="itemHeadingBanner">
                        <h5>{bannerItem.title}</h5>
                        <ul className="aboutMovei">
                            <li>{bannerItem.release_date ?? '2022-08-13'}</li>
                            <li>P : {bannerItem.popularity}</li>
                            <li>{bannerItem.original_language}</li>
                            <li>Is adualt : {bannerItem.adult ? 'Yes' : 'No'}</li>
                        </ul>
                        <h2>{bannerItem.overview}</h2>
                        <h4>{bannerItem.original_title}</h4>
                        <button class="watchNow btnBigger">Watch Now</button>
                        <button class="watchNow btnBigger" style={{ marginLeft: '10px' }}>+</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Banner